
import { CategoryService } from './categoryService.js';
import { executeQuery } from './db.js';
import {  addQuery, deleteQuery, getByQuery1 ,getUsersBy} from './query.js'


export class NeedyService {

    async get() {
        const query =  getUsersBy("needies", "usernameneedies", "categoryneedies", "idneedies", true, "1");
        return await executeQuery(query);
    }

    async getneedyBy(sortByObj) {
        var result;
        console.log("sortByObj: ", sortByObj);
        console.log("tableName")
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery1("needies","usernameneedies","idneedies");   //check if user exist in the needies
        console.log("query: ", query)
        result = await executeQuery(query, values);
        console.log("result getBy: ", result)
        return result;
    }

    

    // async getneedycategory(sortByObj, tablename, column) {
    //     var result;
    //     console.log("sortByObj: ", sortByObj);
    //     // const keys = Object.keys(sortByObj);
    //     const values = Object.values(sortByObj);
    //     console.log("valeus", values)
    //     const key = Object.keys(sortByObj);
    //     const query = getByQuery9(tablename, key, column);        //check if user exist in the needys
    //     console.log("query: ", query)
    //     result = await executeQuery(query, values);
    //     console.log("result getBy: ", result)
    //     return result;
    // }

    async getcategory(NeedyItem) {
        let result, query;
        const idcategoryArray = [];
        const categoryArrayName = NeedyItem.namecategory;
        for (let element = 0; element <= categoryArrayName.length - 1; element++) {
            query = getByQuery("category", ["namecategory"]);
            result = await executeQuery(query, [categoryArrayName[element]]);
            idcategoryArray.push(result[0].idcategory)
        };
        return idcategoryArray;
    }


    async addneedycategory(idcategory, id) {
        // add the user to categoryvolunteers
        let objects, values, keys, query,  result = [];
        console.log("her")
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
        // const category=new CategoryService
        const idcategoryArray = await this.getcategory(needyItem)
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
            // console.log("id",id)
        }
        else {//else, gets the data of needy
            const values = Object.values(needyItem)
            const query = getByQuery1("needies", "usernameneedies", "*");////
            console.log("query111",query)
            result1 = await executeQuery(query, values);
            id = result1[0].idneedies;
            console.log("id",id)
        }
        //add to needyCategory
       await this.addneedycategory(idcategoryArray, id)

        return { result1,idcategoryArray,needyItem }
    }


    // async update(tableName, needyItem, id) {
    //     const keys = Object.keys(needyItem);
    //     const values = Object.values(needyItem);
    //     const query = updateQuery(tableName, keys);
    //     values.push(id);
    //     await executeQuery(query, values);
    // }

    async delete( id) {
        const query = deleteQuery("categoryneedies","idcategoryneedies");
        await executeQuery(query, [id]);
    }

    // async limit(tableName, numOfLimit, startLimit) {
    //     const query = limit(tableName);
    //     return await executeQuery(query, [numOfLimit, startLimit]);
    // }

    async getNeedyByVolunteer(idcategoryArray,usernamevolunteers) {

        console.log("idcategogfrjtyryArray", idcategoryArray)
        let allNeedies = [], query
        for (let element = 0; element <= idcategoryArray.length - 1; element++) {
            query = getUsersBy("needies","usernameneedies","categoryneedies","idneedies",false,"1")
            const neediesmuch = await executeQuery(query, [idcategoryArray[element],usernamevolunteers])
            allNeedies.push(neediesmuch);
        }

        return allNeedies;

    }
}
