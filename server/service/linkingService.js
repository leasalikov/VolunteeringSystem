
import { executeQuery } from './db.js';
// import { loginQuery, registerQuery, updatePassword } from './queryLogin.js'
// import { UserService } from './userService.js';
import { addQuery, getAllLinking, linking } from './query.js'

import { CategoryService } from './categoryService.js';
import { NeedyService } from './needyService.js';
import { VolunteerService } from './volunteerService.js';
export class LinkingService {

    async addLinking(usernameneedies, namecategory, usernamevolenteers) {
        console.log("idcategoryneediesgffghfghj")

        const queryidcategoryvolunteers = linking("idcategoryvolunteers", "categoryvolunteers", "volunteers", "idvolunteers", "usernamevolenteers")
        console.log(queryidcategoryvolunteers)
        let idcategoryvolunteers = await executeQuery(queryidcategoryvolunteers, [usernamevolenteers, namecategory]);
        console.log("idcategoryvolunteers", idcategoryvolunteers)
        console.log("idcategoryneediesgffghfghj")

        const queryidcategoryneedies = linking("idcategoryneedies", "categoryneedies", "needies", "idneedies", "usernameneedies")
        console.log(queryidcategoryneedies)
        let idcategoryneedies = await executeQuery(queryidcategoryneedies, [usernameneedies, namecategory]);


        console.log("idcategoryneedies", idcategoryneedies)
        const volunteerService = new VolunteerService();
        const needyService = new NeedyService();
        // console.log("her",idcategoryvolunteers[0].idcategoryvolunteers)
        // const w = await volunteerService.delete(idcategoryvolunteers[0].idcategoryvolunteers)
        // const s = await needyService.delete(idcategoryneedies[0].idcategoryneedies)////////////////////////////////////////////////////////////////////////
        console.log("idcategoryneedies", idcategoryneedies)
        const query = addQuery("linking", ["idcategoryvolunteers", "idcategoryneedies"]);
        console.log(query)
        const result = await executeQuery(query, [idcategoryvolunteers[0].idcategoryvolunteers, idcategoryneedies[0].idcategoryneedies]);
        idcategoryneedies = idcategoryneedies[0].idcategoryneedies
        idcategoryvolunteers = idcategoryvolunteers[0].idcategoryvolunteers
        return { result, idcategoryneedies, idcategoryvolunteers }
    }

    async get() {
        const queryalllinking = getAllLinking()
        // console.log("her",queryalllinking)
        const result = await executeQuery(queryalllinking);
        // console.log("result1.result[0]",result1.result[0]
        return { result }
    }

   


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