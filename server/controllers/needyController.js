import { NeedyService } from "../service/needyService.js";


const tableName = "needies";

export class NeedyController {

    async getVolunteer(req, res, next) {
        try {
            const service = new NeedyService();
            const resultItems = await service.get(tableName);
            resultItems.forEach((resultItem, i) => delete resultItem.isActive);
            console.log("req: get all needies, res: successfull")
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async getNeedyByVolunteer(req, res, next) {
        try {
            const service = new NeedyService();
            // const id = req.params.id;
            const resultItem = await service.getNeedyByVolunteer(req.body);
            // delete resultItem[0].isActive;
            // console.log("req: get volunteer by id= " + id + ", res: successfull")
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async addNeedy(req, res, next) {
        try {
            const needyService = new NeedyService();
            // const body = Object.values(req.body)
            console.log("booodddyyy   ", req.body)
            const result = await needyService.addNeedy(tableName, req.body);
            if (result == undefined)
                return res.status(401).json({ resualt: "needyName duplicate" });
            res.status(200).json(result);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async deleteVolunteer(req, res, next) {
        try {
            const needyService = new needyService();
            const resultItem = await needyService.deleteVolunteer(tableName, req.params.id);
            console.log("req: delete volunteer with id= " + resultItem.insertId + ", res: successfull")
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async updateVolunteer(req, res, next) {
        try {
            const service = new Service();
            await service.update(tableName, req.body, req.params.id);
            console.log("req: update volunteer with id= " + req.params.id + ", res: successfull")
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}