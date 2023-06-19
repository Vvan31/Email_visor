import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let emails;

export default class EditEmailDAO {
    static async injectDB(conn) {
        if (emails) {
            return;
        }
        try {
            emails = await conn.db(process.env.EMAILS_NS)
                .collection('emails');
        }
        catch (e) {
            console.error(`unable to connect in EmailsDAO: ${e}`);
        }
    }
    static async markAsRead(emailId) {
        try {
            const updateResponse = await emails.updateOne(
                { _id: ObjectId(emailId) },
                { $set: { read: true } }
            )
            return updateResponse
        } catch (e) {
            console.error(`unable to update email: ${e}`)
            return { error: e }
        }
    }

    static async markAsAnswered(emailId) {
        try{
            const updateResponse = await emails.updateOne(
                { _id: ObjectId(emailId) },
                { $set: { answered: true } }
            )
            return updateResponse
        }catch(e){
            console.error(`unable to update email: ${e}`)
            return { error: e }
        }
    }

    static async getNumberOfEmails() {
        let numberOfEmails = await emails.countDocuments();
        return numberOfEmails;
    }
    
}