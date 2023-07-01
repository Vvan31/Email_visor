import EmailsDAO from '../dao/emailsDAO.js' 

export default class EmailsController{

    static async apiGetEmailById(req,res,next){
        try{
            let id = req.params.id || {}
            let email = await EmailsDAO.getEmailById(id)
            if(!email){
                res.status(404).json({error: "Not found"})
                return
            }
            res.json(email)
        }catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }

    static async apiGetEmailsCategories(req,res,next){
        try{
            let propertyTypes = await EmailsDAO.getEmailsCategories()
            res.json(propertyTypes)
        }catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }
    static async apiGetNumberOfEmails(req,res,next){
        try{
            let numberOfEmails = await EmailsDAO.getNumberOfEmails()
            res.json(numberOfEmails)
        }catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }
    static async apiGetNumberOfEmailsCategories(req,res,next){
        try{
            let numberOfEmailsCategories = await EmailsDAO.getNumberOfEmailsCategories()
            res.json(numberOfEmailsCategories)
        }catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }
    
    static async apiGetEmails(req,res,next){
        const emailsPerPage = req.query.emailsPerPage ? parseInt(req.query.emailsPerPage) : 20
        const page = req.query.page ? parseInt(req.query.page) : 0
        let filters = {} 
        let searchQuery = req.query.searchQuery ? req.query.searchQuery : ""

        if(req.query.category){
            filters.category = req.query.category 
        }else if(req.query.owner_email){ 
            filters.owner_email = req.query.owner_email
        }else if(req.query.read){
            /* filters.read = req.query.read */
            const readValue = req.query.read.toLowerCase(); // Convert to lowercase for case-insensitive comparison
            if (readValue === "true" || readValue === "false") {
              filters.read = readValue === "true"; // Convert string to boolean
            }
        }else if(req.query.answered){
            //filters.answered = req.query.answered
            const answeredValue = req.query.answered.toLowerCase(); // Convert to lowercase for case-insensitive comparison
            if (answeredValue === "true" || answeredValue === "false") {
                filters.answered = answeredValue === "true"; // Convert string to boolean
                }
        }

       const { emailsList, totalNumEmails } = await EmailsDAO.getEmails({
            filters, 
            page, 
            emailsPerPage,
            searchQuery
            })

        let response ={
            emails: emailsList,
            page: page,
            filters: filters, 
            entries_per_page: emailsPerPage, 
            searchQuery: searchQuery,
            total_results: totalNumEmails
        } 
   
        //console.log(response)
        res.json(response) 
    }
    static async apiSearchEmails(req, res, next) {
        let searchQuery = req.query.searchQuery ? req.query.searchQuery : "";
        try {
          const { emailList, query } = await EmailsDAO.searchEmails(searchQuery);
          let response = {
            emailList: emailList,
            query: query
          };
          res.json(response);
        } catch (error) {
          console.error(`Something went wrong in apiSearchEmails: ${error}`);
          res.status(500).json({ error: "Internal server error" });
        }
      }
      
}