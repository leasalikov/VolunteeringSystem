
import { LoginService } from '../service/loginService.js'

const loginTry = [];

export class LoginController {

    async checkPassword(req, res, next) {
        try {
            const loginService = new LoginService();
            const resultItems = await loginService.checkPassword(req.body);
            if(resultItems.result==0)return res.status(401).json("wrong details");
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async updatePassword(req, res, next) {
        try {
            const loginService = new LoginService();
            const checkPassword = await loginService.updatePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
            return res.status(200).json(checkPassword);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}