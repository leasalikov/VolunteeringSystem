
import { executeQuery } from './db.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit } from './query.js'


export class VolunteerService {

    async get(tableName) {
        const query = getQuery(tableName);
        return await executeQuery(query);
    }

    async getBy(tableName, sortByObj) {
        const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery(tableName, keys);
        return await executeQuery(query, values);
    }

    async add(volunteers, volunteerItem) {

        const password = volunteerItem.password; 
        delete volunteerItem.password;
        const keys = Object.keys(volunteerItem);
        const values = Object.values(volunteerItem);
        const query = addQuery(volunteers, keys);
        const result= await executeQuery(query, values);
        
        const id = result.insertId;
        console.log(id)
        const loginService = new LoginService();
        const result2= await loginService.register([id, password]);
        return{result,result2}
    }

    async update(tableName, volunteerItem, id) {
        const keys = Object.keys(volunteerItem);
        const values = Object.values(volunteerItem);
        const query = updateQuery(tableName, keys);
        values.push(id);
        await executeQuery(query, values);
    }

    async delete(tableName, id) {
        const query = deleteQuery(tableName);
        await executeQuery(query, [id]);
    }

    async limit(tableName, numOfLimit, startLimit){
        const query = limit(tableName);
        return await executeQuery(query, [numOfLimit, startLimit]);
    }

}
