
import { CategoryService } from './categoryService.js';
import { executeQuery } from './queries/db.js';
import { addQuery, deleteQuery, getByQuery1 } from './queries/query.js'
import { getUsersBy } from './queries/joinQuery.js'


export class NeedyService {

    async get() {
        const query = getUsersBy("needies", "usernameneedies", "categoryneedies", "idneedies", true, "1");
        return await executeQuery(query);
    }

    async getneedyBy(sortByObj) {
        var result;
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery1("needies", "usernameneedies", "idneedies");   //check if user exist in the needies
        result = await executeQuery(query, values);
        return result;
    }

    async addneedycategory(idcategory, id) {
        // add the user to categoryvolunteers
        let objects, values, keys, query, result = [];
        for (let element = 0; element <= idcategory.length - 1; element++) {
            objects = { "idneedies": id, "idcategory": idcategory[element] }
            values = Object.values(objects)
            keys = Object.keys(objects)
            query = addQuery("categoryneedies", keys);

            result.push(await executeQuery(query, values));
        }
        return { result }
    }

    async addneedy(needys, needyItem) {

        //gets the categoryIdArray  
        const category = new CategoryService
        const idcategoryArray = await category.getcategory(needyItem)
        delete needyItem.namecategory;

        // add the user to needy
        const result = await this.getneedyBy(needyItem, "needies", "idneedies")//check if user exist
        var result1, id;

        if (result.length == 0) {//if needy is not exist
            const values = Object.values(needyItem)
            const keys = Object.keys(needyItem);
            const query = addQuery(needys, keys);
            result1 = await executeQuery(query, values);
            id = result1.insertId;
        }
        else {
            const values = Object.values(needyItem)
            const query = getByQuery1("needies", "usernameneedies", "*");
            result1 = await executeQuery(query, values);
            id = result1[0].idneedies;
        }
        //add to needyCategory
        await this.addneedycategory(idcategoryArray, id)
        return { result1, idcategoryArray, needyItem }
    }


    // async update(tableName, needyItem, id) {
    //     const keys = Object.keys(needyItem);
    //     const values = Object.values(needyItem);
    //     const query = updateQuery(tableName, keys);
    //     values.push(id);
    //     await executeQuery(query, values);
    // }

    async deleteNeedy(id) {

        const query = deleteQuery("categoryneedies", "idcategoryneedies");

        const result = await executeQuery(query, [id]);
        console.log("hre", result)
        return result
    }

    // async limit(tableName, numOfLimit, startLimit) {
    //     const query = limit(tableName);
    //     return await executeQuery(query, [numOfLimit, startLimit]);
    // }

    async getNeedyByVolunteer(idcategoryArray, usernamevolunteers) {

        console.log("idcategogfrjtyryArray", idcategoryArray)
        let allNeedies = [], query
        for (let element = 0; element <= idcategoryArray.length - 1; element++) {
            query = getUsersBy("needies", "usernameneedies", "categoryneedies", "idneedies", false, "1")
            const neediesmuch = await executeQuery(query, [idcategoryArray[element], usernamevolunteers])
            allNeedies.push(neediesmuch);
        }

        return allNeedies;

    }
}
