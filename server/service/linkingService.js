
import { executeQuery } from './db.js';
// import { loginQuery, registerQuery, updatePassword } from './queryLogin.js'
// import { UserService } from './userService.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery3, getByQuery5, getByQuery9, a, b } from './query.js'

import { CategoryService } from './categoryService.js';
import { NeedyService } from './needyService.js';
import { VolunteerService } from './volunteerService.js';
export class LinkingService {

    async addLinking(idneedies, namecategory, usernamevolenteers) {
        console.log("idcategoryneediesgffghfghj")
        // const linkingservice = new LinkingService();
        // console.log("usernamevolunteers " + usernamevolenteers);
        // console.log("namecategory " + namecategory);
        // console.log("idneedies " + idneedies);
        // const categoryService = new CategoryService();
        // const idcategory = await categoryService.getBy({ "namecategory": namecategory }, "idcategory")
        // console.log("idcategory", idcategory[0])
        // const idvolunteers = await volunteerService.getvolunteerBy({ "usernamevolenteers": usernamevolenteers }, "volunteers", "idvolunteers")
        // console.log("idddddddddd", idvolunteers)
        // const idcategoryvolunteers = await volunteerService.getvolunteercategory({ "idvolunteers": idvolunteers[0].idvolunteers, "idcategory": idcategory[0].idcategory },
        //     "categoryvolunteers", "idcategoryvolunteers")
        const queryidcategoryvolunteers = a()
        console.log(queryidcategoryvolunteers)
        const idcategoryvolunteers = await executeQuery(queryidcategoryvolunteers, [usernamevolenteers, namecategory]);
        console.log("idcategoryvolunteers",idcategoryvolunteers)
        console.log("idcategoryneediesgffghfghj")
        
        // const idcategoryneedies = await needyService.getneedycategory({ "idneedies": idneedies, "idcategory": idcategory[0].idcategory },
        // "categoryneedies", "idcategoryneedies")
        const queryidcategoryneedies = b()

        const idcategoryneedies = await executeQuery(queryidcategoryneedies, [idneedies, namecategory]);
      
       
        console.log("idcategoryneedies", idcategoryneedies)
        const volunteerService = new VolunteerService();
        const needyService = new NeedyService();

        const w= await volunteerService.delete(idcategoryvolunteers[0].idcategoryvolunteers)
        console.log("w", w)
        const s= await needyService.delete(idcategoryneedies[0].idcategoryneedies)
        console.log("idcategoryneedies",idcategoryneedies)
        const query = addQuery("linking", ["idcategoryvolunteers", "idcategoryneedies"]);
        console.log(query)
        return await executeQuery(query, [idcategoryvolunteers[0].idcategoryvolunteers, idcategoryneedies[0].idcategoryneedies]);

        // const object=Object.keys
        // const userByName = await service.getBy("users", { "username": userName });
        // console.log("userByName!!!!! ", userByName);
        // if (userByName.length == 0) {
        //     return { "result": 0 };
        // }
        // const loginDetails = { "userId": userByName[0].idUser, "password": loginObj.password };
        // const queryLogin = loginQuery();
        // const propertyValues = Object.values(loginDetails);
        // const result = await executeQuery(queryLogin, propertyValues);
        // if (result[0]["COUNT(*)"] == 0)
        //     return { "result": 0 };
        // return { "result": 1, "user": userByName };
    }


    // async register(loginObj) {
    //     const queryRegister = registerQuery();
    //     return await executeQuery(queryRegister, loginObj);
    // }



    // async updatePassword(id, oldPassword, newPassword) {
    //     let queryPassword = loginQuery();
    //     const result = await executeQuery(queryPassword, [id, oldPassword]);
    //     if (result[0]["COUNT(*)"] == 0)
    //         return { "result": 0 };
    //     else {
    //         queryPassword = updatePassword();
    //         const res = await executeQuery(queryPassword, [newPassword, id]);
    //     }
    // }
}