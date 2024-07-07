
import nodemailer from 'nodemailer'

export class EmailService {
  async sendEmail(req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'toiby896@gmail.com',
            pass: 'ahzk sddg tryr uxai'
        }
    });


    var mailOptions = {
      from: 'toiby896@gmail.com',
      to: req.body.Email,
      subject: 'Order Confirmation',
      text:'מערכת התנדבות ',
      // subject: `order pass ${parseInt(req.body.Password)}`,
          html: `<div font-weight: 900; font-size: larger; font-family: inherit;">,
          <h1>hello </h1>
          <br/>
          <p>Your order was successful!</p>
      </div>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

