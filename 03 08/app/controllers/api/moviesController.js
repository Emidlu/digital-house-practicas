let Op = require('sequelize').Op
let db = require('../../database/models');


let moviesController = {

    list: (req, res) => {
        db.Movie.findAll({
            include: ['genreRelationship', 'actors']
        }).then(movies => {
            let respuesta = movies;
            res.send(respuesta);

        }).catch(err => {
            console.log(err)
        })
    }



}