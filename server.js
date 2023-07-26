const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();
const path = require("path");
var bodyParser = require('body-parser');

const app = express();
app.use(express.json())    // <==== parse request body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));


const transporter = nodemailer.createTransport({
  host: "smtp.web.de", //replace with your email provider
  port: 587,
// service: "gmail",
  auth: {
    user: "kamdoum.ngadjui@web.de",
    pass: ""
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  app.post('/send', (req, res, next) => {

    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      from: email,
      to: "lary.ngadjui@gmail.com",// receiver email,
      subject: subject,
      text: message
    }

    console.log((mail))
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.error((err))

        res.json({
          status: 'fail'
        })
      } else {
          console.log("OK")
        res.json({
         status: 'success'
        })
      }
    })
  })
  
  app.listen(3000, () => console.log("Server is running!"));
