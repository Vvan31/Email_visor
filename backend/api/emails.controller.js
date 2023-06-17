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

        if(req.query.category){
            filters.category = req.query.category 
        }else if(req.query.owner_email){ 
            filters.owner_email = req.query.owner_email
        }else if(req.query.read){
            filters.read = req.query.read
        }else if(req.query.answered){
            filters.answered = req.query.answered
        }

       const { emailsList, totalNumEmails } = await EmailsDAO.getEmails({
            filters, 
            page, 
            emailsPerPage
            })

        let response ={
            emails: emailsList,
            page: page,
            filters: filters, 
            entries_per_page: emailsPerPage, 
            total_results: totalNumEmails
        } 
   
        console.log(response)
        res.json(response) 
    }
}