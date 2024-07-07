
import { executeQuery } from './queries/db.js';
import { addQuery } from './queries/query.js'
import { getAllLinking, linking } from './queries/joinQuery.js'

import { CategoryService } from './categoryService.js';
import { NeedyService } from './needyService.js';
import { VolunteerService } from './volunteerService.js';
export class LinkingService {

    async addLinking(usernameneedies, namecategory, usernamevolenteers) {
        console.log("idcategoryneediesgffghfghj")

        const queryidcategoryvolunteers = linking("idcategoryvolunteers", "categoryvolunteers", "volunteers", "idvolunteers", "usernamevolenteers")
        let idcategoryvolunteers = await executeQuery(queryidcategoryvolunteers, [usernamevolenteers, namecategory]);

        const queryidcategoryneedies = linking("idcategoryneedies", "categoryneedies", "needies", "idneedies", "usernameneedies")
        let idcategoryneedies = await executeQuery(queryidcategoryneedies, [usernameneedies, namecategory]);


        console.log("idcategoryneedies", idcategoryneedies)
        const volunteerService = new VolunteerService();
        const needyService = new NeedyService();
        // console.log("her",idcategoryvolunteers[0].idcategoryvolunteers)
        // const w = await volunteerService.deleteVolunteer(idcategoryvolunteers[0].idcategoryvolunteers)
        // const s = await needyService.deleteNeedy(idcategoryneedies[0].idcategoryneedies)////////////////////////////////////////////////////////////////////////
        console.log("idcategoryneedies", idcategoryneedies)
        const query = addQuery("linking", ["idcategoryvolunteers", "idcategoryneedies"]);
        console.log(query)
        const result = await executeQuery(query, [idcategoryvolunteers[0].idcategoryvolunteers, idcategoryneedies[0].idcategoryneedies]);
        const idcategoryneedy = idcategoryneedies[0].idcategoryneedies
        const idcategoryvolunteer = idcategoryvolunteers[0].idcategoryvolunteers
        return { result, idcategoryneedy, idcategoryvolunteer }
    }

    async get() {
        const queryalllinking = getAllLinking()
        const result = await executeQuery(queryalllinking);
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