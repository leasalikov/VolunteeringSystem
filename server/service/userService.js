
import { executeQuery } from './queries/db.js';
import {  getByQuery, addQuery } from './queries/query.js'
import { LoginService } from './loginService.js';

export class UserService {

    // async get(tableName) {
    //     const query = getQuery(tableName);
    //     return await executeQuery(query);
    // }

    async getBy(tableName, sortByObj) {
        console.log("sortByObj",sortByObj)
        const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery(tableName, keys);
        console.log(query)
        const user= await executeQuery(query, values);
        // console.log("a",a)
        return user;
    }

    async add(users, userItem) {
        const password = userItem.password; 
        delete userItem.password;
        const keys = Object.keys(userItem);
        const values = Object.values(userItem);
        
        const query = addQuery(users, keys);
       
        const result= await executeQuery(query, values);
        console.log("her",result)
        const id = result.insertId;
        console.log(id)
        const loginService = new LoginService();
        const result3= await loginService.register([id, password]);
        const result2=result3.result
        // const token = result3.token
        return{result,result2}
    }

    // async update(tableName, userItem, id) {
    //     const keys = Object.keys(userItem);
    //     const values = Object.values(userItem);
    //     const query = updateQuery(tableName, keys);
    //     values.push(id);
    //     await executeQuery(query, values);
    // }

    // async delete(tableName, id) {
    //     const query = deleteQuery(tableName);
    //     await executeQuery(query, [id]);
    // }

    // async limit(tableName, numOfLimit, startLimit){
    //     const query = limit(tableName);
    //     return await executeQuery(query, [numOfLimit, startLimit]);
    // }

}
