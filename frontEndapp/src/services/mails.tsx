import axios from "axios";

class MailsService {
    getAllMails(page = 0) {
        return axios.get(`React.https://email-visor-backend.vercel.app/api/v1/emails?page=${page}`);
    }
    
    getTotalMails() {
        return axios.get(`React.https://email-visor-backend.vercel.app/api/v1/emails/totalEmails`);
    }

    getMail(id: string) {
        return axios.get(`React.https://email-visor-backend.vercel.app/api/v1/emails/${id}`);
    }
    findMails(query: any, by = "category", page = 0) {
        return axios.get(`React.https://email-visor-backend.vercel.app/api/v1/emails?${by}=${query}&page=${page}`)
    }
    getCategories() {
        return axios.get(`React.https://email-visor-backend.vercel.app/api/v1/emails/categories`);
    }
    getEmailsByCategory() {
        return axios.get(`React.https://email-visor-backend.vercel.app/api/v1/emails/categories/numberofcategories`);
    }
}
export default new MailsService();