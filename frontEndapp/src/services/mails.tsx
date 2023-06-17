import axios from "axios";

class MailsService {
    getAllMails(page = 0) {
        return axios.get(`http://localhost:8000/api/v1/emails?page=${page}`);
    }
    getMail(id: string) {
        return axios.get(`http://localhost:8000/api/v1/emails/${id}`);
    }
    findMails(query: any, by = "title", page = 0) {
        return axios.get(`http://localhost:8000/api/v1/emails?${by}=${query}&page=${page}`)
    }
    getCategories() {
        return axios.get(`http://localhost:8000/api/v1/emails/categories`);
    }
    getEmailsByCategory() {
        return axios.get(`http://localhost:8000/api/v1/emails/categories/numberofcategories`);
    }
}
export default new MailsService();