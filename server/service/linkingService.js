
import { executeQuery } from './queries/db.js';
import { addQuery } from './queries/query.js'
import { getAllLinking, linking } from './queries/joinQuery.js'

import { CategoryService } from './categoryService.js';
import { NeedyService } from './needyService.js';
import { VolunteerService } from './volunteerService.js';
export class LinkingService {

    async addLinking(usernameneedies, namecategory, usernamevolenteers) {
        const queryidcategoryvolunteers = linking("idcategoryvolunteers", "categoryvolunteers", "volunteers", "idvolunteers", "usernamevolenteers")
        let idcategoryvolunteers = await executeQuery(queryidcategoryvolunteers, [usernamevolenteers, namecategory]);

        const queryidcategoryneedies = linking("idcategoryneedies", "categoryneedies", "needies", "idneedies", "usernameneedies")
        let idcategoryneedies = await executeQuery(queryidcategoryneedies, [usernameneedies, namecategory]);

        const volunteerService = new VolunteerService();
        const needyService = new NeedyService();
        const query = addQuery("linking", ["idcategoryvolunteers", "idcategoryneedies"]);
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
}