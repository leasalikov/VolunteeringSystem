
import { executeQuery } from './queries/db.js';
import jwt from 'jsonwebtoken';
import { loginQuery, registerQuery, updatePassword } from './queries/queryLogin.js'
import { UserService } from './userService.js';
import 'dotenv/config'
// import { Service } from '../service/service.js';

export class LoginService {

    async checkPassword(loginObj) {

        const service = new UserService();
        const userName = loginObj.username;
        const userByName = await service.getBy("users", { "username": userName });
        if (userByName.length == 0) {
            return { "result": 0 };
        }
        const loginDetails = { "userId": userByName[0].idUser, "password": loginObj.password };
        const queryLogin = loginQuery();
        const propertyValues = Object.values(loginDetails);
        const result = await executeQuery(queryLogin, propertyValues);
        if (result[0]["COUNT(*)"] == 0)
            return { "result": 0 };
        return { "result": 1, "user": userByName };
    }

    async register(loginObj) {
        const queryRegister = registerQuery();
        const result = await executeQuery(queryRegister, loginObj);
        // const token = this.generateToken(loginObj[1])
        // return { result, token }
        return { result }
    }

    generateToken = (userId) => {
        // Create a token with user ID and a secret key
        console.log("her", userId)
        const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("her", token)
        return token;
    };
}