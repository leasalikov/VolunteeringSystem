
// // import { executeQuery } from './db.js';
// // import { getQuery, getByQuery, deleteQuery, addQuery, updateQuery, getByQuery2, getByQuery3, getByQuery4, getByQuery7, getByQuery6, getByQuery9 } from './query.js'
// // let nodemailer = require('nodemailer');
// import nodemailer from 'nodemailer'



// export class EmailService {
//     async sendEmail(req, res, next) {
//         try {
//             console.log()
//             var transporter = nodemailer.createTransport({
//                 service: 'outlook',
//                 auth: {
//                     user: 'ScooterService@outlook.co.il',
//                     pass: 'ServiceScooter'
//                 }
//             });
//             var mailOptions = {
//                 from: 'ScooterService@outlook.co.il',
//                 to: JSON.stringify(data1.Email),
//                 subject: `order pass ${parseInt(data1.Password)}`,
//                 html: `<div font-weight: 900; font-size: larger; font-family: inherit;">
//                 <h1>hello </h1>
//                 <br/>
//                 <p>you ordered succesfully!!!!</p>
//             </div>`
//             };

//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     throw new Error("Can't send a mail!")
//                 } else {
//                     console.log('Email sent: ' + info.response);
//                 }
//             });
//         }
//         catch (err) {
//             console.log("err sendEmail1" + err);
//         }
//     }
// }

