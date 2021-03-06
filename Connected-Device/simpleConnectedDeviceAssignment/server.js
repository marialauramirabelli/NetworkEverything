const http = require('http')
const fs = require('fs');
const express = require('express'); // web server application
const app = express();        // instantiate express server
const server = http.Server(app);  // connects http library to server
const hostname = "192.168.1.22";


const PORT=8083;

app.use(express.static('public'));  // find pages in public directory

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
})

//FUNCTION TO SEND EMAIL - I'm assuming it needs to be written on this file
//Access to necessary info from JSON file? And board (for humidity readings)
//Leaves a record on JSON or txt file every time it sends an email?




//EXAMPLE FROM NODEMAILER.COM
/*"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error); */
