import express from "express";
import EmailsController from "./emails.controller.js";
import EditEmailController from "./editEmail.controller.js";

const router = express.Router();
router.route("/").get(EmailsController.apiGetEmails);
router.route("/totalEmails").get(EmailsController.apiGetNumberOfEmails);
router.route("/id/:id").put(EmailsController.apiGetEmailById);
router.route("/categories").get(EmailsController.apiGetEmailsCategories);
router.route("/categories/numberofcategories").get(EmailsController.apiGetNumberOfEmailsCategories);
router
  .route("/editEmail")
  /* .post(EditEmailController.apiEditEmail)
     .put(EditEmailController.apiEditEmail)
     .delete(EditEmailController.apiEditEmail);
   */
export default router;
