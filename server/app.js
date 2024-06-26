import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/userRouter.js';
import { loginRouter } from './routers/loginRouter.js';
import { volunteerRouter } from './routers/volunteerRouter.js';
import { needyRouter } from './routers/needyRouter.js';

// import { logErrors } from './middleware/logError.js';

const app = express();

// const express = require('express');
// const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());
app.use(express.json());


app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/volunteer', volunteerRouter);
app.use('/needy', needyRouter);
// app.use(logErrors);
app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Subject of your email',
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send({ success: false, error: error.message });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ success: true });
    }
  });
});

app.listen(8080, (err) => {
    console.log("hiiiiii")
    if (err) console.error(err);
    console.log("Server listening on PORT:", 8080);
});
