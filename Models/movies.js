var mongoose = require('mongoose');

var moviesSearch = mongoose.Schema({
    name:String,
    Department:String,
    Age:String,
    gender:String,
    Mobile:String

})
module.exports = mongoose.model("stud", moviesSearch);