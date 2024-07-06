
import { LinkingService } from '../service/linkingService.js'

export class LinkingController {

    async getlinking(req, res, next) {
        try {
            const linkingService = new LinkingService();
            const resultItems = await linkingService.get();
            return res.status(200).json(resultItems.result);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }


    async addlinking(req, res, next) {
        try {
            const linkingService = new LinkingService();
            console.log("her---req.body",req.body)
            const addLinking = await linkingService.addLinking(req.body.usernameneedies, req.body.namecategory, req.body.usernamevolenteers);
            return res.status(200).json(addLinking);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}