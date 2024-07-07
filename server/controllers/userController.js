

import { UserService } from '../service/userService.js';
import { LoginService } from '../service/loginService.js';

const tableName = "users";

export class userController {

    async addUser(req, res, next) {
        try {
            const userService = new UserService();
            const resualt = await userService.add(tableName, req.body);
            if (resualt == undefined)
                return res.status(401).json({ resualt: "userName duplicate" });
          
            res.status(200).json(resualt);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }
}