
import { CategoryService } from './categoryService.js';
import { executeQuery } from './queries/db.js';
import { addQuery, deleteQuery, getByQuery1, getByQuery } from './queries/query.js'
import { getUsersBy } from './queries/joinQuery.js'

export class VolunteerService {

    async get() {
        const query = getUsersBy("volunteers", "usernamevolenteers", "categoryvolunteers", "idvolunteers", true, "1")
        return await executeQuery(query);
    }

    async getvolunteerBy(sortByObj, tablename, column) {
        var result;
        const values = Object.values(sortByObj);
        const key = Object.keys(sortByObj);
        const query = getByQuery1(tablename, key, column);//check if user exist in the volunteers
        result = await executeQuery(query, values);
        return result;
    }

    async addvolunteercategory(idcategory, id) {
        // add the user to categoryvolunteers
        let objects, values, keys, query, result = [];
        for (let element = 0; element <= idcategory.length - 1; element++) {
            objects = { "idvolunteers": id, "idcategory": idcategory[element] }
            values = Object.values(objects)
            keys = Object.keys(objects)
            query = addQuery("categoryvolunteers", keys);
            result.push(await executeQuery(query, values));
        }
        return { result }
    }

    async addVolunteer(volunteers, volunteerItem) {

        //gets the categoryIdArray
        const category = new CategoryService
        const idcategoryArray = await category.getcategory(volunteerItem)

        delete volunteerItem.namecategory;
        // add the user to volunteer
        const result = await this.getvolunteerBy(volunteerItem, "volunteers", "idvolunteers")//check if user exist
        var result1, id;
        if (result.length == 0) {//if volunteer is not exist
            const values = Object.values(volunteerItem)
            const keys = Object.keys(volunteerItem);
            const query = addQuery(volunteers, keys);
            result1 = await executeQuery(query, values);
            id = result1.insertId;
        }
        else {//else, gets the data of volunteer
            const values = Object.values(volunteerItem)
            const query = getByQuery1("volunteers", "usernamevolenteers", "*");////
            console.log(query)
            result1 = await executeQuery(query, values);
            id = result1[0].idvolunteers;
        }
        //add to volunteerCategory
        const addvolunteercategory = await this.addvolunteercategory(idcategoryArray, id)

        return { result1, idcategoryArray, volunteerItem }
    }
    //find all the needies that suit the volunteer

    async deleteVolunteer(id) {

        const query = deleteQuery("categoryvolunteers", "idcategoryvolunteers");
        return await executeQuery(query, [id]);
    }

}