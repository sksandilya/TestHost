var express = require('express')
var router = express.Router();
var movies = require('./Models/movies')

// router.get("/", (req, res)=>{
//         res.sendFile("index.html", {root: __dirname})
// });

router.get('/movies', async(req, res)=>{
        const iMovie = await movies.find();
        res.send(iMovie);
})

module.exports = router