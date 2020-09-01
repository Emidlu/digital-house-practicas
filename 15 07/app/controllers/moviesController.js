let db = require('../db/models');
const { render } = require('../app');

moviesController = {
    list: (req, res)=>{
        db.Movie.findAll()
        .then(resultado=>{
            res.render('movies', {movies:resultado})
        })
        .catch(error=>{
            res.send(error)
        })
    },
    detail: async(req, res)=>{
        let movie = await db.Movie.findByPk(req.params.id);
        let genre = await db.Genre.findByPk(movie.genre_id);
        res.render('movieDetail',{movie: movie, genre: genre})

    },
    delete: async (req, res)=>{
        await db.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/movies');
    },
    edit: async (req, res)=>{
        let movie = await db.Movie.findByPk(req.params.id);
        let genre = await db.Genre.findAll();
        res.render('movieEdit',{movie:movie, genre:genre})
    },
    edited: (req, res)=>{
        db.Movie.update({
            title: req.body.titulo,
            rating: req.body.rating,
            awards: req.body.premios,
            release_date: req.body.fecha,
            length: req.body.duracion,
            genre_id: req.body.genero
        },{
            where: { id: req.params.id}
        })
        res.redirect('/movies')
    },
    create: async (req, res)=>{
        let genre = await db.Genre.findAll();
        res.render('create', {genre: genre})
    },
    created: async(req, res)=>{
        await db.Movie.create({
            title: req.body.titulo,
            rating: req.body.rating,
            awards: req.body.premios,
            release_date: req.body.fecha,
            length: req.body.duracion,
            genre_id: req.body.genero
        })
        res.redirect('/movies')
    }
    
    
}

module.exports = moviesController;