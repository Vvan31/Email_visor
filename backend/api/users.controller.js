import UserDAO from "../dao/userDAO.js";

export default class UsersController {

    static async apiRegisterUser(req, res, next) {
        try {
            let user = req.body;
            let registerUser = await UserDAO.registerUser(user);
            if (!registerUser) {
                res.status(404).json({ error: "Not found" });
                return;
            }
            res.json(registerUser);
        }
        catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiLoginUser(req, res, next) {
        try {
            let user = req.body;
            let loginUser = await UserDAO.loginUser(user);
            if (!loginUser) {
                res.status(404).json({ error: "Not found" });
                return;
            }
            res.json(loginUser);
        }
        catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiGetCurrentUser(req, res, next) {
        try {
            let token = req.headers.authorization;
            let currentUser = await UserDAO.getCurrentUser(token);
            if (!currentUser) {
                res.status(404).json({ error: "Not found" });
                return;
            }
            res.json(currentUser);
        }
        catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

}