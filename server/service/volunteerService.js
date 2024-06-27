
import { executeQuery } from './db.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, getByQuery2, getByQuery3, getByQuery4 ,getByQuery7} from './query.js'


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

    async addvolunteer(tablename, details) {

    }
    async getNeedy() {

    }

    async getbyn() {

    }

    async getcategory(volunteerItem) {
        let result3, query3;
        const idcategory = [];
        const categoryArray = volunteerItem.namecategory;
        for (let element = 0; element <= categoryArray.length - 1; element++) {
            query3 = getByQuery("category", ["namecategory"]);
            result3 = await executeQuery(query3, [categoryArray[element]]);
            idcategory.push(result3[0].idcategory)
        };
        console.log("idcategory", idcategory)
        return idcategory
    }


    async addvolunteercategory(idcategory, id) {
        // add the user to categoryvolunteers
        let objects, values2, keys2, query2, query4, idneedies = [], result2 = [], idcategoryarray = [];
        console.log("yeiiiii")
        for (let element = 0; element <= idcategory.length - 1; element++) {

            query4 = getByQuery4("categoryneedies", "idcategory")
            const a = await executeQuery(query4, [idcategory[element]])
            console.log("a", a)
            idneedies.push(a[0].idneedies);
            console.log("a.idcategory " + a[0].idcategory)
            idcategoryarray.push(a[0].idcategory)
            objects = { "idvolunteers": id, "idcategory": idcategory[element] }
            console.log("objects", objects)
            values2 = Object.values(objects)
            keys2 = Object.keys(objects)
            query2 = addQuery("categoryvolunteers", keys2);
            result2.push(await executeQuery(query2, values2));
        }
        console.log("idneedies " + idneedies)
        return { result2, idneedies, idcategoryarray }
    }

    async addVolunteer(volunteers, volunteerItem) {
        //gets the categoryIdArray
        const idcategory = await this.getcategory(volunteerItem)
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
        let idcategoryarray = addvolunteercategory.idcategoryarray
        console.log("            ",idneedies,idcategoryarray)
        ////find all the needies that suit the volunteer
        let query5, result4 = [];
        for (let e = 0; e <= idneedies.length - 1; e++) {
                query5 = getByQuery3("needies", "idneedies")
                const needy = await executeQuery(query5, [idneedies[e]]);
                console.log("needy", needy)
                query5 = getByQuery7("category", "idcategory");
                const namecategory = await executeQuery(query5, [idcategoryarray[e]]);
                console.log("category", namecategory)
                query5 = getByQuery3("users", "username")
              
                const allNeedy =Object.assign({},await executeQuery(query5, Object.values(needy[0].usernameneedies)),{"namecategory":namecategory}) ;
                
                if (allNeedy[0].username !== result[0].usernamevolenteers) {
                    console.log("allNeedy[0].username",allNeedy[0].username)
                    result4.push(allNeedy)
                }
        }
        
        return { result1, result4  }
    }

    async update(tableName, volunteerItem, id) {
        const keys = Object.keys(volunteerItem);
        const values = Object.values(volunteerItem);
        const query = updateQuery(tableName, keys);
        values.push(id);
        await executeQuery(query, values);
    }

    // async delete(tableName, id) {
    //     const query = deleteQuery(tableName);
    //     await executeQuery(query, [id]);
    // }

    // async limit(tableName, numOfLimit, startLimit) {
    //     const query = limit(tableName);
    //     return await executeQuery(query, [numOfLimit, startLimit]);
    // }
}