
import { EmailService } from '../service/emailService.js'
// const loginTry = [];

export class EmailController {
    async postemail(req, res, next) {
        try {
            const emailService = new EmailService();
            const resualt = await emailService.sendEmail(req, res, next);
            if (resualt == undefined)
                return res.status(401).json({ resualt: "emailName duplicate" });

//             res.status(200).json(resualt);
//         }
//         catch (ex) {
//             const err = {};
//             err.statusCode = 500;
//             err.message = ex;
//             next(err);
//         }
        
//     }

// }