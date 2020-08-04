var express = require('express');
var router = express.Router();
var moviesAPIController = require('../../controllers/api/moviesController');
const db = require('../../database/models');



router.get("/", moviesAPIController.list);


router.get('/:id', function(){

    db.Movie.findOne({
        where: {id:req.params.id},
        include: ['genreRelationship', 'actors']
    }).then(movie => {
        res.json(movie)})
})

module.exports = router;