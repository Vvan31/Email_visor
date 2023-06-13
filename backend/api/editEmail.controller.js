import EditEmailDAO from '../dao/editEmailDAO.js';

export default class EditEmailController{

    static async apiMArkAsRead(req,res,next){
        try{
            const emailId = req.body.emailId
            const email = await EditEmailDAO.markAsRead(emailId)
            res.json(email)
        }catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error: e.message})
        }
    }

    static async apiMarkAsAnswered(req,res,next){
        try{
            const emailId = req.body.emailId
            const email = await EditEmailDAO.markAsAnswered(emailId)
            res.json(email)
        }catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error: e.message})
        }
    }
}