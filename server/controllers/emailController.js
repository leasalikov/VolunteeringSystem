
import { EmailService } from "../service/emailService.js";
const tableName = "emails";

export class EmailController {

    async getEmail(req, res, next) {
        try {
            const service = new EmailService();
            const resultItems = await service.get(tableName);
            resultItems.forEach((resultItem, i) => delete resultItem.isActive);
            // const result = await emailService.addEmail(tableName, req.body);
            // if (result == undefined)
            //     return res.status(401).json({ resualt: "emailName duplicate" });
            console.log("req: get all emails, res: successfull")
            return res.status(200).json(resultItems);                
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async getEmailById(req, res, next) {
        try {
            const service = new Service();
            const id = req.params.id;
            const resultItem = await service.getBy(tableName, { "id": id });
            delete resultItem[0].isActive;
            console.log("req: get email by id= " + id + ", res: successfull")
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async addEmail(req, res, next) {
        try {
            const emailService = new EmailService();
            const body = Object.values(req.body)
            console.log("booodddyyy   ", req.body)
            const result = await emailService.addEmail(tableName, req.body);
            if (result == undefined)
                return res.status(401).json({ resualt: "emailName duplicate" });
          
            res.status(200).json(result);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async deleteEmail(req, res, next) {
        try {
            const emailService = new EmailService();
            const resultItem = await emailService.deleteEmail(tableName, req.params.id);
            console.log("req: delete email with id= " + resultItem.insertId + ", res: successfull")
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err);
        }
    }

    async updateEmail(req, res, next) {
        try {
            const service = new Service();
            await service.update(tableName, req.body, req.params.id);
            console.log("req: update email with id= " + req.params.id + ", res: successfull")
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