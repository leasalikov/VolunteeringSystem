
import { executeQuery } from './db.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery3, getByQuery5,getByQuery9} from './query.js'


export class NeedyService {

    async get(tableName) {
        const query = getQuery(tableName);
        return await executeQuery(query);
    }

    async getBy(sortByObj) {
        var result;
        console.log("sortByObj: ", sortByObj);
        console.log("tableName")
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery5();   //check if user exist in the needies
        console.log("query: ", query)
        result = await executeQuery(query, values);   
        console.log("result getBy: ", result)
        return result;
    }

    async getneedycategory(sortByObj,tablename,column){
        var result;
        console.log("sortByObj: ", sortByObj);
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        console.log("valeus",values)
        const key = Object.keys(sortByObj);
        const query = getByQuery9(tablename,key,column);        //check if user exist in the volunteers
        console.log("query: ", query)
        result = await executeQuery(query, values);
        console.log("result getBy: ", result)
        return result;
        }

    async addNeedy(needies, needyItem) {
        const idcategory = [];
        let result3;
        let query3;
        //gets the NeedyIdArray
        const categoryArray = needyItem.namecategory;
        console.log("ca===========  ", categoryArray)
        // if(categoryArray.length == 0){
        //     alert("לא בוצעה בחירה, נא לבחור פריט מהרשימה")
        // }
        for (let element = 0; element <= categoryArray.length - 1; element++) {
            query3 = getByQuery("category", ["namecategory"]);
            result3 = await executeQuery(query3, [categoryArray[element]]);
            idcategory.push(result3[0].idcategory)
            console.log("idcategory ", idcategory[element])
        };
        // console.log("needyItem ", needyItem);
        delete needyItem.namecategory;
        console.log("needyItem ", needyItem)

        // add the user to needy
        const result = await this.getBy(needyItem)
        console.log("resultfeht", result)
        var result1;
        // console.log(result[0]["COUNT(*)"])
        var id;
        if (result.length == 0) {
            console.log("count = 0")
            const values = Object.values(needyItem)
            const keys = Object.keys(needyItem);
            const query = addQuery(needies, keys);
            result1 = await executeQuery(query, values);
            id = result1.insertId;
        }
        else{
            const values = Object.values(needyItem)
            const query = getByQuery5();
            result1 = await executeQuery(query, values);
            console.log("result1: ", result1)
            id = result1[0].idneedies;
            // console.log()
        }

        console.log("idcat " + idcategory);
        console.log("resultid:", id)
        // add the user to categoryneedies
        let objects;
        let values2;
        let keys2;
        let query2;
        let result2 = [];
        console.log("adddddddddddddddddd")
        for (let element = 0; element <= categoryArray.length - 1; element++) {
            objects = { "idneedies": id, "idcategory": idcategory[element] }
            values2 = Object.values(objects)
            console.log("v2" + values2)
            keys2 = Object.keys(objects)
            console.log("v2 ", values2)////
            console.log("k2 ", keys2)
            query2 = addQuery("categoryneedies", keys2);
            console.log("query2 ", query2)
            result2.push(await executeQuery(query2, values2));
            console.log("result2" + result2[element])
        }
        delete needyItem.categoryArray;
        return { result1, result2 }
    }

    async update(tableName, needyItem, id) {
        const keys = Object.keys(needyItem);
        const values = Object.values(needyItem);
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
