
import { VolunteerService } from "../service/volunteerService.js";


const tableName = "volunteers";

export class VolunteerController {

    async getVolunteer(req, res, next) {
        try {
            const service = new VolunteerService();
            const resultItems = await service.get();
            resultItems.forEach((resultItem, i) => delete resultItem.isActive);
            return res.status(200).json(resultItems);                
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async addVolunteer(req, res, next) {
        try {
            const volunteerService = new VolunteerService();
            const body = Object.values(req.body)
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

    async deleteVolunteer(req, res, next) {
        try {
            console.log("her")
            const volunteerService = new VolunteerService();
            const resultItem = await volunteerService.deleteVolunteer( req.params.id);
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
}