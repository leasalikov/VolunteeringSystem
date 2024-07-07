
import { executeQuery } from './queries/db.js';
import {  getByQuery} from './queries/query.js'

export class CategoryService {

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
}
