import express from "express";
import UsersController from "./users.controller.js";

const router = express.Router();
router.post("/register", UsersController.apiRegisterUser);
router.post("/login", UsersController.apiLoginUser);
router.get("/current" , UsersController.apiGetCurrentUser);

export default router;