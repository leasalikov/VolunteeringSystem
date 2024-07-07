
import { executeQuery } from './queries/db.js';
import jwt from 'jsonwebtoken';
import { loginQuery, registerQuery, updatePassword } from './queries/queryLogin.js'
import { UserService } from './userService.js';
import 'dotenv/config'
// import { Service } from '../service/service.js';

export class LoginService {

    async checkPassword(loginObj) {

        console.log("loginObj", loginObj)
        const service = new UserService();
        const userName = loginObj.username;
        console.log("userName " + userName);
        const userByName = await service.getBy("users", { "username": userName });
        console.log("userByName!!!!! ", userByName);
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
        console.log("her", loginObj)
        const token = this.generateToken(loginObj[1])
        console.log("token", token)
        return { result, token }
    }

    // async updatePassword(id, oldPassword, newPassword) {
    //     let queryPassword = loginQuery();
    //     const result = await executeQuery(queryPassword, [id, oldPassword]);
    //     if (result[0]["COUNT(*)"] == 0)
    //         return { "result": 0 };
    //     else {
    //         queryPassword = updatePassword();
    //         const res = await executeQuery(queryPassword, [newPassword, id]);
    //     }
    // }


    generateToken = (userId) => {
        // Create a token with user ID and a secret key
        console.log("her", userId)
        const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("her", token)
        return token;
    };


}