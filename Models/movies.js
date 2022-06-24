var mongoose = require('mongoose');

var moviesSearch = mongoose.Schema({
    name:String,
    ratings:String

})
module.exports = mongoose.model("movies", moviesSearch);