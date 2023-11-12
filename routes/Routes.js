const express= require('express');
const { sendEmail } = require('../controllers/controller.js');
const router = express.Router();

router.post('/sendMail', sendEmail);



module.exports= router;