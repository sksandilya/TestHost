var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var router = require("./route")

var app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/api', router);
app.listen(process.env.PORT || 3000, ()=>{
    console.log("server started");
})