
import { executeQuery } from './db.js';
// import { loginQuery, registerQuery, updatePassword } from './queryLogin.js'
// import { UserService } from './userService.js';
import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, limit, getByQuery3, getByQuery5, getAllLinking, linking,join } from './query.js'

import { CategoryService } from './categoryService.js';
import { NeedyService } from './needyService.js';
import { VolunteerService } from './volunteerService.js';
export class LinkingService {

    async addLinking(usernameneedies, namecategory, usernamevolenteers) {
        console.log("idcategoryneediesgffghfghj")

        const queryidcategoryvolunteers = linking("idcategoryvolunteers", "categoryvolunteers", "volunteers", "idvolunteers", "usernamevolenteers")
        console.log(queryidcategoryvolunteers)
        const idcategoryvolunteers = await executeQuery(queryidcategoryvolunteers, [usernamevolenteers, namecategory]);
        console.log("idcategoryvolunteers", idcategoryvolunteers)
        console.log("idcategoryneediesgffghfghj")

        const queryidcategoryneedies = linking("idcategoryneedies", "categoryneedies", "needies", "idneedies", "usernameneedies")
        console.log(queryidcategoryneedies)
        const idcategoryneedies = await executeQuery(queryidcategoryneedies, [usernameneedies, namecategory]);


        console.log("idcategoryneedies", idcategoryneedies)
        const volunteerService = new VolunteerService();
        const needyService = new NeedyService();
        // console.log("her",idcategoryvolunteers[0].idcategoryvolunteers)
        const w = await volunteerService.delete(idcategoryvolunteers[0].idcategoryvolunteers)
        const s = await needyService.delete(idcategoryneedies[0].idcategoryneedies)////////////////////////////////////////////////////////////////////////
        console.log("idcategoryneedies", idcategoryneedies)
        const query = addQuery("linking", ["idcategoryvolunteers", "idcategoryneedies"]);
        console.log(query)
        return await executeQuery(query, [idcategoryvolunteers[0].idcategoryvolunteers, idcategoryneedies[0].idcategoryneedies]);

    }

    async get() {
        // const queryNeedy = join("needies","usernameneedies","categoryneedies","idneedies",true,"0");
        // console.log("her",queryNeedy)
        // const resultNeedy= await executeQuery(queryNeedy);
        // const queryVolunteer = join("volunteers","usernamevolenteers","categoryvolunteers","idvolunteers",true,"0");
        // console.log("her",queryVolunteer)
        const queryalllinking=getAllLinking()
        const result1= await executeQuery(queryalllinking);
        const result=result1.result[0]
        return {result}
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