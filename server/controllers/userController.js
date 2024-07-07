

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

    // async deleteUser(req, res, next) {
    //     try {
    //         const userService = new UserService();
    //         const resultItem = await userService.deleteUser(tableName, req.params.id);
    //         console.log("req: delete user with id= " + resultItem.insertId + ", res: successfull")
    //         res.status(200).json(resultItem);
    //     }
    //     catch (ex) {
    //         const err = {};
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err);
    //     }
    // }

    // async updateUser(req, res, next) {
    //     try {
    //         const service = new Service();
    //         await service.update(tableName, req.body, req.params.id);
    //         console.log("req: update user with id= " + req.params.id + ", res: successfull")
    //         res.status(200).json({ status: 200, data: req.params.id });
    //     }
    //     catch (ex) {
    //         const err = {}
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err)
    //     }
    // }
}