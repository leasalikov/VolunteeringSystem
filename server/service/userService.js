
import { executeQuery } from './queries/db.js';
import { getByQuery, addQuery } from './queries/query.js'
import { LoginService } from './loginService.js';

export class UserService {

    async getBy(tableName, sortByObj) {
        const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery(tableName, keys);
        const user = await executeQuery(query, values);
        return user;
    }

    async add(users, userItem) {
        const password = userItem.password;
        delete userItem.password;
        const keys = Object.keys(userItem);
        const values = Object.values(userItem);
        const query = addQuery(users, keys);

        const result = await executeQuery(query, values);
        const id = result.insertId;
        const loginService = new LoginService();
        const result3 = await loginService.register([id, password]);
        const result2 = result3.result;
        return { result, result2 }
    }
}
