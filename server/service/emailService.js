
import { executeQuery } from './db.js';
// import {  } from './query.js'


export class EmailService {

    // async get(tableName) {
    //     const query = getQuery(tableName);
    //     return await executeQuery(query);
    // }

    // async getemailBy(sortByObj, tablename, column) {
    //     var result;
    //     console.log("sortByObj: ", sortByObj);
    //     // const keys = Object.keys(sortByObj);
    //     const values = Object.values(sortByObj);
    //     const key = Object.keys(sortByObj);
    //     const query = getByQuery6(tablename, key, column);        //check if user exist in the emails
    //     console.log("query: ", query)
    //     result = await executeQuery(query, values);
    //     console.log("result getBy: ", result)
    //     return result;
    // }
    // async getemailcategory(sortByObj, tablename, column) {
    //     var result;
    //     console.log("sortByObj: ", sortByObj);
    //     // const keys = Object.keys(sortByObj);
    //     const values = Object.values(sortByObj);
    //     console.log("valeus", values)
    //     const key = Object.keys(sortByObj);
    //     const query = getByQuery9(tablename, key, column);        //check if user exist in the emails
    //     console.log("query: ", query)
    //     result = await executeQuery(query, values);
    //     console.log("result getBy: ", result)
    //     return result;
    // }

    // async addemail(tablename, details) {

    // }
    // async getNeedy() {

    // }

    // async getbyn() {

    // }

    // async getcategory(emailItem) {
    //     let result, query;
    //     const idcategoryArray = [];
    //     const categoryArrayName = emailItem.namecategory;
    //     for (let element = 0; element <= categoryArrayName.length - 1; element++) {
    //         query = getByQuery("category", ["namecategory"]);
    //         result = await executeQuery(query, [categoryArrayName[element]]);
    //         idcategoryArray.push(result[0].idcategory)
    //     };
    //     return idcategoryArray;
    // }

    // async addemailcategory(idcategory, id) {
    //     // add the user to categoryemails
    //     let objects, values, keys, query,  result = [];
    //     for (let element = 0; element <= idcategory.length - 1; element++) {

    //         // query4 = getByQuery4("categoryneedies", "idcategory")
    //         // const a = await executeQuery(query4, [idcategory[element]])
    //         // console.log("a", a)
    //         // idneedies.push(a[0].idneedies);
    //         // console.log("a.idcategory " + a[0].idcategory)
    //         // idcategoryarray.push(a[0].idcategory) return idneedies, idcategoryarray
    //         objects = { "idemails": id, "idcategory": idcategory[element] }
    //         values = Object.values(objects)
    //         keys = Object.keys(objects)
    //         query = addQuery("categoryemails", keys);
    //         result.push(await executeQuery(query, values));
    //     }
    //     return { result }
    // }

    // async addEmail(emails, emailItem) {

    //     //gets the categoryIdArray
    //     const idcategoryArray = await this.getcategory(emailItem)
    //     delete emailItem.namecategory;
    //     // add the user to email
    //     const result = await this.getemailBy(emailItem, "emails", "idemails")//check if user exist
    //     var result1, id;
    //     if (result.length == 0) {//if email is not exist
    //         const values = Object.values(emailItem)
    //         const keys = Object.keys(emailItem);
    //         const query = addQuery(emails, keys);
    //         result1 = await executeQuery(query, values);
    //         id = result1.insertId;
    //     }
    //     else {//else, gets the data of email
    //         const values = Object.values(emailItem)
    //         const query = getByQuery6("emails", "usernamevolenteers", "*");////
    //         console.log(query)
    //         result1 = await executeQuery(query, values);
    //         id = result1[0].idemails;
    //     }
    //     //add to emailCategory
    //     const addemailcategory = await this.addemailcategory(idcategoryArray, id)
    // //    let idneedies = addemailcategory.idneedies
    // //     let idcategoryarray = addemailcategory.idcategoryarray

    //     return { result1 }
    // }
    // ////find all the needies that suit the email

    // async getEmailsNeedies( emailItem) {
    //     let idneedies = [],idcategoryarray = [],query
    //     for (let element = 0; element <= idcategory.length - 1; element++) {

    //         query = getByQuery4("categoryneedies", "idcategory")
    //         const neediesmuch = await executeQuery(query, [idcategory[element]])
    //         console.log("a", a)
    //         idneedies.push(a[0].idneedies);
    //         console.log("a.idcategory " + a[0].idcategory)
    //         idcategoryarray.push(a[0].idcategory)
    //         //  return idneedies, idcategoryarray
    //     }
    //     let query5, result4 = [];
    //     for (let e = 0; e <= idneedies.length - 1; e++) {
    //         query5 = getByQuery3("needies", "idneedies")
    //         const needy = await executeQuery(query5, [idneedies[e]]);
    //         console.log("needy", needy)
    //         query5 = getByQuery7("category", "idcategory");
    //         const namecategory = await executeQuery(query5, [idcategoryarray[e]]);
    //         console.log("category", namecategory)
    //         query5 = getByQuery3("users", "username")

    //         const allNeedy = Object.assign({}, await executeQuery(query5, Object.values(needy[0].usernameneedies)), { "namecategory": namecategory });

    //         if (allNeedy[0].username !== result[0].usernamevolenteers) {
    //             console.log("allNeedy[0].username", allNeedy[0].username)
    //             result4.push(allNeedy)
    //         }
    //     }
    //           // let idneedies = addemailcategory.idneedies
    //     // let idcategoryarray = addemailcategory.idcategoryarray
    //     return result4;
    // }

    // async update(tableName, emailItem, id) {
    //     const keys = Object.keys(emailItem);
    //     const values = Object.values(emailItem);
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