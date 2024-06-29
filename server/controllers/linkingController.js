
import { LinkingService } from '../service/linkingService.js'

// const loginTry = [];

export class LinkingController {

    async getlinking(req, res, next) {
        // try {
        //     const loginService = new linkingService();
        //  console.log("hgjhygh")
        //     // let addUserName = true;
        //     // let numOfTries = 1;
        //     // loginTry.forEach((log) => { if (log.userName == req.body.userName) { log.num++; addUserName = false; numOfTries = log.num; } })
        //     // if (addUserName) {
        //     //     loginTry.push({ "userName": req.body.userName, "num": 1 });
        //     //     setTimeout(() => loginTry.forEach((log) => { if (log.userName == req.body.userName) log.num = 0; }), 500000)
        //     // }
        //     // if (numOfTries > 4) {
        //     //     return res.status(401).json({ result: "blocked" });
        //     // }
        //     const resultItems = await loginService.checkPassword(req.body);
        //     if(resultItems.result==0)return res.status(401).json("wrong details");
        //      console.log("contro"+resultItems.result)
        //     return res.status(200).json(resultItems);
        // }
        // catch (ex) {
        //     const err = {};
        //     err.statusCode = 500;
        //     err.message = ex;
        //     next(err);
        // }
    }


    async addlinking(req, res, next) {
        try {
            const linkingService = new LinkingService();
            console.log(req.body.namecategory)
            const addLinking = await linkingService.addLinking(req.body.idneedies, req.body.namecategory, req.body.usernamevolenteers);
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