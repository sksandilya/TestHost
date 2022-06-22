var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var router = require("./route")

var app = express();
app.use(router);
app.listen(process.env.PORT, ()=>{
    console.log("server started");
})