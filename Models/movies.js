var mongoose = require('mongoose');

var moviesSearch = mongoose.Schema({
    name:String,
    rating:String

})
module.exports = mongoose.model("stud", moviesSearch);