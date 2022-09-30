let express = require('express');
let router = express.Router();
let cors = require('cors');
const creds = require('./config.js');
let nodemailer = require("nodemailer");
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)