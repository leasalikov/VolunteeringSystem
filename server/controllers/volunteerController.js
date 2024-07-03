
import { VolunteerService } from "../service/volunteerService.js";


const tableName = "volunteers";

export class VolunteerController {

    async getVolunteer(req, res, next) {
        try {
            const service = new VolunteerService();
            const resultItems = await service.get();
            resultItems.forEach((resultItem, i) => delete resultItem.isActive);
            console.log("req: get all volunteers, res: successfull")
            return res.status(200).json(resultItems);                
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    // async getVolunteerById(req, res, next) {
    //     try {
    //         const service = new Service();
    //         const id = req.params.id;
    //         const resultItem = await service.getBy(tableName, { "id": id });
    //         delete resultItem[0].isActive;
    //         console.log("req: get volunteer by id= " + id + ", res: successfull")
    //         res.status(200).json(resultItem);
    //     }
    //     catch (ex) {
    //         const err = {};
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err);
    //     }
    // }

    async addVolunteer(req, res, next) {
        try {
            const volunteerService = new VolunteerService();
            const body = Object.values(req.body)
            console.log("booodddyyy   ", req.body)
            const result = await volunteerService.addVolunteer(tableName, req.body);
            if (result == undefined)
                return res.status(401).json({ resualt: "volunteerName duplicate" });
          
            res.status(200).json(result);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    // async deleteVolunteer(req, res, next) {
    //     try {
    //         const volunteerService = new VolunteerService();
    //         const resultItem = await volunteerService.deleteVolunteer(tableName, req.params.id);
    //         console.log("req: delete volunteer with id= " + resultItem.insertId + ", res: successfull")
    //         res.status(200).json(resultItem);
    //     }
    //     catch (ex) {
    //         const err = {};
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err);
    //     }
    // }

    // async updateVolunteer(req, res, next) {
    //     try {
    //         const service = new Service();
    //         await service.update(tableName, req.body, req.params.id);
    //         console.log("req: update volunteer with id= " + req.params.id + ", res: successfull")
    //         res.status(200).json({ status: 200, data: req.params.id });
    //     }
    //     catch (ex) {
    //         const err = {}
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err)
    //     }
    // }
}