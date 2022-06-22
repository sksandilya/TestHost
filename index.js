var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var router = require("./route")
const { use } = require('./route')


mongoose.connect("mongodb+srv://ssingh756:rkdfbca053@cluster0.vpnq5.mongodb.net/movies?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
    var app = express();
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.json());
    app.use('/api', router);

    app.listen(process.env.PORT, ()=>{
        console.log("server started");
    })
}).catch((err)=>{
    console.log(err);
})

