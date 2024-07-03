
import { LinkingService } from '../service/linkingService.js'

// const loginTry = [];

export class LinkingController {

    async getlinking(req, res, next) {
        try {
            const linkingService = new LinkingService();
      
            const resultItems = await linkingService.get();
            if(resultItems.result==0)return res.status(401).json("wrong details");
             console.log("contro"+resultItems.result)
            return res.status(200).json(resultItems);
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
            console.log("addLinking",addLinking)
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