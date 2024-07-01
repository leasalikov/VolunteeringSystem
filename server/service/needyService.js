
import { executeQuery } from './db.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery3, getByQuery6, getByQuery9 ,join} from './query.js'


export class NeedyService {

    async get(tableName) {
        const query = getQuery(tableName);
        return await executeQuery(query);
    }

    async getneedyBy(sortByObj) {
        var result;
        console.log("sortByObj: ", sortByObj);
        console.log("tableName")
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        const query = getByQuery6("needies","usernameneedies","idneedies");   //check if user exist in the needies
        console.log("query: ", query)
        result = await executeQuery(query, values);
        console.log("result getBy: ", result)
        return result;
    }

    

    async getneedycategory(sortByObj, tablename, column) {
        var result;
        console.log("sortByObj: ", sortByObj);
        // const keys = Object.keys(sortByObj);
        const values = Object.values(sortByObj);
        console.log("valeus", values)
        const key = Object.keys(sortByObj);
        const query = getByQuery9(tablename, key, column);        //check if user exist in the needys
        console.log("query: ", query)
        result = await executeQuery(query, values);
        console.log("result getBy: ", result)
        return result;
    }

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

            // query4 = getByQuery4("categoryneedies", "idcategory")
            // const a = await executeQuery(query4, [idcategory[element]])
            // console.log("a", a)
            // idneedies.push(a[0].idneedies);
            // console.log("a.idcategory " + a[0].idcategory)
            // idcategoryarray.push(a[0].idcategory) return idneedies, idcategoryarray
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
            const query = getByQuery6("needies", "usernameneedies", "*");////
            console.log("query111",query)
            result1 = await executeQuery(query, values);
            id = result1[0].idneedies;
            console.log("id",id)
        }
       
     
        //add to needyCategory
        const addneedycategory = await this.addneedycategory(idcategoryArray, id)
    //    let idneedies = addneedycategory.idneedies
    //     let idcategoryarray = addneedycategory.idcategoryarray

        return { result1,idcategoryArray,needyItem }
    }


    // async addNeedy(needies, needyItem) {
    //     const idcategory = [];
    //     let result3;
    //     let query3;
    //     //gets the NeedyIdArray
    //     const categoryArray = needyItem.namecategory;
    //     console.log("ca===========  ", categoryArray)
    //     // if(categoryArray.length == 0){
    //     //     alert("לא בוצעה בחירה, נא לבחור פריט מהרשימה")
    //     // }
    //     for (let element = 0; element <= categoryArray.length - 1; element++) {
    //         query3 = getByQuery("category", ["namecategory"]);
    //         result3 = await executeQuery(query3, [categoryArray[element]]);
    //         idcategory.push(result3[0].idcategory)
    //         console.log("idcategory ", idcategory[element])
    //     };
    //     // console.log("needyItem ", needyItem);
    //     delete needyItem.namecategory;
    //     console.log("needyItem ", needyItem)

    //     // add the user to needy
    //     const result = await this.getBy(needyItem)
    //     console.log("resultfeht", result)
    //     var result1;
    //     // console.log(result[0]["COUNT(*)"])
    //     var id;
    //     if (result.length == 0) {
    //         console.log("count = 0")
    //         const values = Object.values(needyItem)
    //         const keys = Object.keys(needyItem);
    //         const query = addQuery(needies, keys);
    //         result1 = await executeQuery(query, values);
    //         id = result1.insertId;
    //     }
    //     else {
    //         const values = Object.values(needyItem)
    //         const query = getByQuery5();
    //         result1 = await executeQuery(query, values);
    //         console.log("result1: ", result1)
    //         id = result1[0].idneedies;
    //         // console.log()
    //     }

    //     console.log("idcat " + idcategory);
    //     console.log("resultid:", id)
    //     // add the user to categoryneedies
    //     let objects;
    //     let values2;
    //     let keys2;
    //     let query2;
    //     let result2 = [];
    //     console.log("adddddddddddddddddd")
    //     for (let element = 0; element <= categoryArray.length - 1; element++) {
    //         objects = { "idneedies": id, "idcategory": idcategory[element] }
    //         values2 = Object.values(objects)
    //         console.log("v2" + values2)
    //         keys2 = Object.keys(objects)
    //         console.log("v2 ", values2)////
    //         console.log("k2 ", keys2)
    //         query2 = addQuery("categoryneedies", keys2);
    //         console.log("query2 ", query2)
    //         result2.push(await executeQuery(query2, values2));
    //         console.log("result2" + result2[element])
    //     }
    //     delete needyItem.categoryArray;
    //     return { result1, result2 }
    // }

    async update(tableName, needyItem, id) {
        const keys = Object.keys(needyItem);
        const values = Object.values(needyItem);
        const query = updateQuery(tableName, keys);
        values.push(id);
        await executeQuery(query, values);
    }

    async delete( id) {
        const query = deleteQuery("categoryneedies","idcategoryneedies");
        await executeQuery(query, [id]);
    }

    async limit(tableName, numOfLimit, startLimit) {
        const query = limit(tableName);
        return await executeQuery(query, [numOfLimit, startLimit]);
    }

    async getNeedyByVolunteer(idcategoryArray) {

        console.log("idcategogfrjtyryArray", idcategoryArray)
        // idcategoryArray=idcategoryArray.idcategoryneedy
        let allNeedies = [], query
        // const query2=join()
        // console.log("query",query2)
        for (let element = 0; element <= idcategoryArray.length - 1; element++) {
            console.log("gffj")
            query = join()
            console.log("query",query)
            const neediesmuch = await executeQuery(query, [idcategoryArray[element]])
            console.log("neediesmuch", neediesmuch)
            allNeedies.push(neediesmuch);
            //  return idneedies, idcategoryarray
        }
console.log("allNeedies",allNeedies)

        return allNeedies;

    }
}
