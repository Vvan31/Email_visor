// import data from '../data/dummyData.json' assert { type: "json" };

let emails

export default class EmailsDAO{
   static async injectDB(conn){
        if(emails){
            return
      } 
      try{
        emails = await conn.db(process.env.EMAILS_NS) 
                  .collection('emails')
      }  
      catch(e){
          console.error(`unable to connect in EmailsDAO: ${e}`) 
          }
      }   
      
      // put sample data into the database
 /*      static async injectSampleData() {
        try {
          await emails.insertMany(data);
          console.log('Sample data inserted successfully.');
        } catch (e) {
          console.error(`Unable to insert sample data: ${e}`);
        }
      } */
      static async getNumberOfEmails(){
        let numberOfEmails = 0
        try{
            numberOfEmails = await emails.countDocuments()
            return numberOfEmails
        }catch(e){
            console.error(`unable to get number of emails, ${e}`)
            return numberOfEmails
        }
    }
      
        static async getEmailById(id){
            try{
                const pipeline = [
                    { 
                        $match: {_id: new ObjectId(id),},
                    },
                    {
                        $lookup: {
                            from: "emails",
                            let: { id: "$_id" },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: {
                                            $eq: ["$email_id", "$$id"],
                                        },
                                    },
                                },
                                {
                                    $sort: {
                                        date: -1,
                                    },
                                },
                            ],
                            as: "emails",
                        },
                    },
                    {
                        $addFields: {
                            emails: "$emails",
                        },
                    },
                ]
                return await emails.aggregate(pipeline).next()
            }catch(e){
                console.error(`something went wrong in getEmailById: ${e}`)
                throw e
            }
        }

        static async getEmailsCategories(){
            let categories = []
            try{
                categories = await emails.distinct("category")
                return categories
            }catch(e){
                console.error(`unable to get categories, ${e}`)
                return categories
            }
        }

        static async getNumberOfEmailsCategories() {
            try {
              const pipeline = [
                {
                  $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                  }
                },
                {
                  $project: {
                    category: "$_id",
                    count: 1,
                    _id: 0
                  }
                }
              ];
          
              const result = await emails.aggregate(pipeline).toArray();
              return result;
            } catch (e) {
              console.error(`Unable to get categories: ${e}`);
              return [];
            }
          }

        static async getEmails({
            filters = null,
            page = 0,
            emailsPerPage = 20
        } = {}) {
            let query
            // filrers = category, read, answered. 
            if(filters){
                if("category" in filters){
                    query = {"category": {$eq: filters['category']}}
                }else if("read" in filters){
                    query = { "read": { $eq: filters['read']}}
                }else if("answered" in filters){
                    query = { "answered": { $eq: filters['answered']}}
                }else if("owner_email" in filters){
                    query = { $text: { $search: filters['owner_email']}}
                }
            }
            let cursor
            try{
                cursor = await emails
                    .find(query) 
                    .limit(emailsPerPage)  
                    .skip(emailsPerPage * page)
                const emailsList = await cursor.toArray()
                const count = await emails.countDocuments(query)
                return {emailsList, count}
            }
            catch(e){
                console.error(`unable to issue find command, ${e}`)
                return {emailsList: [], count: 0}
            }
        }
  }