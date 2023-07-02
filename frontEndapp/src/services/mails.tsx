import axios from "axios";

class MailsService {
    getAllMails(page = 0) {
        return axios.get(`https://email-visor-backend-htfynai2d-vvan31.vercel.app/api/v1/emails?page=${page}`);
    }
    
    getTotalMails() {
        return axios.get(`https://email-visor-backend-htfynai2d-vvan31.vercel.app/api/v1/emails/totalEmails`);
    }

    getMail(id: string) {
        return axios.get(`https://email-visor-backend-htfynai2d-vvan31.vercel.app/api/v1/emails/${id}`);
    }
    findMails(query: any, by = "category", page = 0) {
        return axios.get(`https://email-visor-backend-htfynai2d-vvan31.vercel.app/api/v1/emails?${by}=${query}&page=${page}`)
    }
    getCategories() {
        return axios.get(`https://email-visor-backend-htfynai2d-vvan31.vercel.app/api/v1/emails/categories`);
    }
    getEmailsByCategory() {
        return axios.get(`https://email-visor-backend-htfynai2d-vvan31.vercel.app/api/v1/emails/categories/numberofcategories`);
    }
    searchEmails(query = "") {
        return axios.get(`https://email-visor-backend.vercel.app/api/v1/emails/search?searchQuery=${query}`);
    }
}
export default new MailsService();