var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser'); 
var app = express();
var thcDb = require('./routes/thcDb');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json());

app.use(express.static(__dirname+"/views"));
 
app.post('/projectEnquiry', thcDb.projectEnquiry);
 
app.listen(8080);
console.log('Listening on port 8080...');
