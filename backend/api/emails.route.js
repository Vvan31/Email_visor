import express, { response } from "express";
import EmailsController from "./emails.controller.js";
import EditEmailController from "./editEmail.controller.js";

const router = express.Router();
router.route("/").get(EmailsController.apiGetEmails);
router.route("/id/:id").put(EmailsController.apiGetEmailById);
router.route("/category/:category").get(EmailsController.apiGetEmailsCategories);
router
    .route("/editEmail")
    .post(EditEmailController.apiEditEmail)
    .put(EditEmailController.apiEditEmail)
    .delete(EditEmailController.apiEditEmail);

export default router;