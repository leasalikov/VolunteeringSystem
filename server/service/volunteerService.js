
import { executeQuery } from './db.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery2} from './query.js'


export class VolunteerService {

    async get(tableName) {
        const query = getQuery(tableName);
        return await executeQuery(query);
    }

    async getBy(sortByObj) {
        var result;
        console.log("sortByObj: ", sortByObj);
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery2();        //check if user exist in the volunteers
        console.log("query: ", query)
        result = await executeQuery(query, values);   
        console.log("result getBy: ", result)
        return result;
    }

    async addVolunteer(volunteers, volunteerItem) {
        const idcategory = [];
        let result3;
        let query3;
        //gets the cateroryIdArray
        const categoryArray = volunteerItem.namecategory;
        console.log("ca===========  ", categoryArray)
        for (let element = 0; element <= categoryArray.length - 1; element++) {
            query3 = getByQuery("category", ["namecategory"]);
            result3 = await executeQuery(query3, [categoryArray[element]]);
            idcategory.push(result3[0].idcategory)
            console.log("idcategory ", idcategory[element])
        };
        // console.log("volunteerItem ", volunteerItem);
        delete volunteerItem.namecategory;
        console.log("volunteerItem ", volunteerItem)

        // add the user to volunteer
        const result = await this.getBy(volunteerItem)
        console.log("resultfeht", result)
        var result1;
        // console.log(result[0]["COUNT(*)"])
        var id;
        if (result.length == 0) {
            console.log("count = 0")
            const values = Object.values(volunteerItem)
            const keys = Object.keys(volunteerItem);
            const query = addQuery(volunteers, keys);
            result1 = await executeQuery(query, values);
            id = result1.insertId;
        }
        else{
            const values = Object.values(volunteerItem)
            const query = getByQuery2();
            result1 = await executeQuery(query, values);
            console.log("result1: ", result1)
            id = result1[0].idvolunteers;
        }

        console.log("idcat " + idcategory);
        console.log("resultid:", id)
        // add the user to categoryvolunteers
        let objects;
        let values2;
        let keys2;
        let query2;
        let result2 = [];
        console.log("adddddddddddddddddd")
        for (let element = 0; element <= categoryArray.length - 1; element++) {
            objects = { "idvolunteers": id, "idcategory": idcategory[element] }
            values2 = Object.values(objects)
            console.log("v2" + values2)
            keys2 = Object.keys(objects)
            console.log("v2 ", values2)////
            console.log("k2 ", keys2)
            query2 = addQuery("categoryvolunteers", keys2);
            console.log("query2 ", query2)
            result2.push(await executeQuery(query2, values2));
            console.log("result2" + result2[element])
        }
        delete volunteerItem.categoryArray;
        return { result1, result2 }
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

    async limit(tableName, numOfLimit, startLimit) {
        const query = limit(tableName);
        return await executeQuery(query, [numOfLimit, startLimit]);
    }
}