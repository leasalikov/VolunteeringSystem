
import { executeQuery } from './db.js';
// import { loginQuery, registerQuery, updatePassword } from './queryLogin.js'
// import { UserService } from './userService.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery3, getByQuery5, getByQuery9, a, b } from './query.js'

import { CategoryService } from './categoryService.js';
import { NeedyService } from './needyService.js';
import { VolunteerService } from './volunteerService.js';
export class LinkingService {

    async addLinking(usernameneedies, namecategory, usernamevolenteers) {
        console.log("idcategoryneediesgffghfghj")

        const queryidcategoryvolunteers = a("idcategoryvolunteers","categoryvolunteers","volunteers","idvolunteers","usernamevolenteers")
        console.log(queryidcategoryvolunteers)
        const idcategoryvolunteers = await executeQuery(queryidcategoryvolunteers, [usernamevolenteers, namecategory]);
        console.log("idcategoryvolunteers",idcategoryvolunteers)
        console.log("idcategoryneediesgffghfghj")
       
        const queryidcategoryneedies = a("idcategoryneedies","categoryneedies","needies","idneedies","usernameneedies")
        console.log(queryidcategoryneedies)
        const idcategoryneedies = await executeQuery(queryidcategoryneedies, [usernameneedies, namecategory]);
      
       
        console.log("idcategoryneedies", idcategoryneedies)
        const volunteerService = new VolunteerService();
        const needyService = new NeedyService();
// console.log("her",idcategoryvolunteers[0].idcategoryvolunteers)
        const w= await volunteerService.delete(idcategoryvolunteers[0].idcategoryvolunteers)
        console.log("w", w)
        const s= await needyService.delete(idcategoryneedies[0].idcategoryneedies)
        console.log("idcategoryneedies",idcategoryneedies)
        const query = addQuery("linking", ["idcategoryvolunteers", "idcategoryneedies"]);
        console.log(query)
        return await executeQuery(query, [idcategoryvolunteers[0].idcategoryvolunteers, idcategoryneedies[0].idcategoryneedies]);

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