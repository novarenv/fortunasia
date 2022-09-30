// import express from 'express';
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export async function mail() {
  // let router = express.Router();
  // let cors = require("cors");
  // // let creds = require('./config.js');
  // const app = express();

  // app.use(cors());
  // app.use(express.json());
  // app.use("/", router);
  // app.listen("https://api.nodemailer.com/:path*");

  // console.log("Req", req);

  const nodemailer = require("nodemailer");

  console.log("???");

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, novarenv@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
