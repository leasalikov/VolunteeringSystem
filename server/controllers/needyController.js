import { json } from "express";
import { NeedyService } from "../service/needyService.js";


const tableName = "needies";

export class NeedyController {

    async getNeedy(req, res, next) {
        try {
            const service = new NeedyService();
            const resultItems = await service.get();
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
            const resultItem = await service.getNeedyByVolunteer(req.params.array,req.params.name);
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
            const result = await needyService.addneedy(tableName, req.body);
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

    async deleteNeedy(req, res, next) {
        try {
            const needyService = new NeedyService();
            const resultItem = await needyService.deleteNeedy( req.params.id);
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }
}