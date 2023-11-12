const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');
// const sgT = require(sendgridTransport);
const dotenv = require('dotenv');

dotenv.config();



//transport
const transporter = nodemailer.createTransport(
    {
        host:"smtp.gmail.com",
        port:587,
        auth : {
            user:process.env.USER,
            pass:process.env.PASS,
        }
    }
);
const sendEmail = (req,res)=>{

    try {
        const{name , email , msg} = req.body

        //validation
        if(!name||!email||!msg){
            return res.status(500).send({
                success:false,
                message:"Please provide all field"
            })
        }

        //email matter

        transporter.sendMail({
            to: "pranavprajapati277@gmail.com",
            from :"pranav212002@gmail.com",
            subject : 'Regarding  portfolio',
            html:`
            <h5>Detail Information</h5>
            <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
            </ul>
            `
        })

        return res.status(200).send({
            success:true,
            message:"Message sent"
        })

        
    } catch (error) {
        console.log(error);
        return res.status(5000).send({
            success:false,
            message : "Send Email API error",
            error
        })
        
    }

}

module.exports = {sendEmail};