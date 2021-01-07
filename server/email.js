// import required node modules

const express = require('express');
const nodemailer = require('nodemailer');
// initaliase express
const router = express.Router();

// define our output
router.post('/', (req, res) => {
    console.log(req.body);
    const output = `
    <p> You have a new contact request</p>
    <h3> Contact Details </h3>
    <ul>
        <li> Name: ${req.body.name}</li>
        <li> Email: ${req.body.email}</li>
    </ul>
    <h3> Message Text: </h3>
    <p> ${req.body.message}</p>
    `


// step 1: create transport object
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'airgold1991@gmail.com', // need to match your .env file
        pass: 'jayde0915'
    },
    tls: {
        rejectUnauthorized: false
    }
});

// // step 2: create email options
let mailOptions = {
     from: process.env.EMAIL, //sender address
     to: 'arielle1502@yahoo.com', //receiver address
     subject: 'New customer contact',
     html: output
}

// step 3: send email message
transporter.sendMail(mailOptions, (error, info)=>{
    console.log('sending email...');
    if(error){
        return console.log('Errors: ', error)
    }else{
        console.log("message sent : %s", info.messageId);
        console.log('Email sent. Success');
    }
})
})

module.exports = router;