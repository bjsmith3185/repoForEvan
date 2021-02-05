
const nodemailer = require('nodemailer');
const creds = require('../config/config');


module.exports = {

    transport: {
        host: 'smtp.gmail.com', // SMTP host of provider
        port: 587,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    },

    // Send and confirm status of email function
    sendMessage: function (body) {

        const firstName = body.firstName
        const lastName = body.lastName
        const email = body.email
        const occupation = body.occupation
        const subject = body.subject
        const message = body.message
        
        // Contact email object
        const mail = {
            from: firstName + " " + lastName,
            to: 'http mail api I will be using',
            email: email,
            occupation: occupation,
            subject: subject,
            text: message
        }
        console.log("mail template")
        console.log(mail)

        var transporter = nodemailer.createTransport(transport);

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log('status: message failed to send')
            } else {
                console.log('status: success! \n This is the data sent: ' + data)
            }
        })
    },

    // Auto-reply confirmation email to sender
    autoReply: function (autoReplyMail) {

        transporter.sendMail(autoReplyMail, (err, data) => {
            if (err) {
                console.log('status: auto-reply message failed to send')
            } else {
                console.log('status: success! \n auto-reply data sent: ' + data)
            }

        })
    }
};






// console.log('Congratulations - message sent!')


// // Auto-reply email object
// const autoReplyEmail = {
//     from: 'Evan Bero',
//     to: email,
//     subject: 'Submission was successful',
//     text: 'Thank you for contacting me! \n Please feel free to reach out if you have any further questions. \n Best, \n Evan Bero \n Full-stack Web Developer \n evanbero1980@gmail.com'
// }
// console.log('Congratulations - auto-reply message sent! ')