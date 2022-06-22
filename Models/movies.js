var mongoose = require('mongoose');

var moviesSearch = mongoose.Schema({
    name:String,
    Age:String

})
module.exports = mongoose.model("stud", moviesSearch);