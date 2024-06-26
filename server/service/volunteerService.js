
import { executeQuery } from './db.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery2, getByQuery3, getByQuery4 } from './query.js'


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

    async addvolunteercategory(idcategory, id) {
        // add the user to categoryvolunteers
        let objects, values2, keys2, query2, query4, idneedies = [], result2 = [];
        console.log("yeiiiii")
        for (let element = 0; element <= idcategory.length - 1; element++) {

            query4 = getByQuery4("categoryneedies", "idcategory")
            idneedies.push(await executeQuery(query4, [idcategory[element]]));

            objects = { "idvolunteers": id, "idcategory": idcategory[element] }
            console.log("objects", objects)
            values2 = Object.values(objects)
            keys2 = Object.keys(objects)
            query2 = addQuery("categoryvolunteers", keys2);
            result2.push(await executeQuery(query2, values2));
        }
        console.log("result2" + result2 + " " + idneedies)
        return { result2, idneedies }
    }

    async addVolunteer(volunteers, volunteerItem) {
        const idcategory = [];
        let result3, query3;
        //gets the categoryIdArray
        const categoryArray = volunteerItem.namecategory;
        for (let element = 0; element <= categoryArray.length - 1; element++) {
            query3 = getByQuery("category", ["namecategory"]);
            result3 = await executeQuery(query3, [categoryArray[element]]);
            idcategory.push(result3[0].idcategory)
        };

        // add the user to volunteer
        delete volunteerItem.namecategory;
        const result = await this.getBy(volunteerItem)//check if user exist
        var result1, id;
        if (result.length == 0) {
            const values = Object.values(volunteerItem)
            const keys = Object.keys(volunteerItem);
            const query = addQuery(volunteers, keys);
            result1 = await executeQuery(query, values);
            id = result1.insertId;
        }
        else {
            const values = Object.values(volunteerItem)
            const query = getByQuery2();
            result1 = await executeQuery(query, values);
            id = result1[0].idvolunteers;
        }
        const addvolunteercategory = await this.addvolunteercategory(idcategory, id)
        let idneedies = addvolunteercategory.idneedies

        ////find all the needies that suit the volunteer
        let query5, result4 = [];
        for (let e = 0; e <= idneedies.length - 1; e++) {
            for (let p = 0; p <= idneedies[e].length - 1; p++) {
                query5 = getByQuery3("needies", "idneedies")
                const needy = await executeQuery(query5, Object.values(idneedies[e][p]));
                query5 = getByQuery3("users", "username")
                const allNeedy = await executeQuery(query5, Object.values(needy[0].usernameneedies));
                if (allNeedy[0].username !== result[0].usernamevolenteers) {
                    // delete needy[0].idneedies;
                    result4.push(allNeedy)
                }
            }
        }
        delete volunteerItem.namecategory;

        console.log("Array:", result4)
        delete volunteerItem.categoryArray;
        return { result1, result4 }
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