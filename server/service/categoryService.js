
import { executeQuery } from './db.js';
import {  getByQuery} from './query.js'


export class CategoryService {

    // async get(tableName) {
    //     const query = getQuery(tableName);
    //     return await executeQuery(query);
    // }

    // async getBy(sortByObj,column) {
    //     var result;
    //     console.log("sortByObj: ", sortByObj);
    //     console.log("tableName")
    //     // const keys = Object.keys(sortByObj);
    //     const values = Object.values(sortByObj);
    //     const key = Object.keys(sortByObj);
    //     const query = getByQuery1("category",key,column);   //check if user exist in the needies
    //     console.log("query: ", query)
    //     result = await executeQuery(query, values);   
    //     console.log("result getBy: ", result)
    //     return result;
    // }
    // async getcategory(NeedyItem) {
    //     console.log("her",NeedyItem)
    //     let result, query;
    //     const idcategoryArray = [];
    //     const categoryArrayName = NeedyItem.namecategory;
    //     for (let element = 0; element <= categoryArrayName.length - 1; element++) {
    //         query = getByQuery("category", ["namecategory"]);
    //         result = await executeQuery(query, [categoryArrayName[element]]);
    //         console.log("her",NeedyItem)
    //         idcategoryArray.push(result[0].idcategory)
    //     };
        
    //     return idcategoryArray;
    // }

    // async update(tableName, CategoryItem, id) {
    //     const keys = Object.keys(CategoryItem);
    //     const values = Object.values(CategoryItem);
    //     const query = updateQuery(tableName, keys);
    //     values.push(id);
    //     await executeQuery(query, values);
    // }

    // async delete(tableName, id) {
    //     const query = deleteQuery(tableName);
    //     await executeQuery(query, [id]);
    // }

    // async limit(tableName, numOfLimit, startLimit) {
    //     const query = limit(tableName);
    //     return await executeQuery(query, [numOfLimit, startLimit]);
    // }
}
