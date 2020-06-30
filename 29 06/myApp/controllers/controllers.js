let fs = require('fs');
let bcrypt = require('bcrypt');

let controllerss = {

    tema: function (req, res, next) {
        res.render('theme', {
            title: req.session.color
        });
    },

    cambioColor: function (req, res, next) {

        
        if (req.body.recordame != undefined) {
            res.cookie('recordame', req.body.color, {
                maxAge: 600000
            })
        }

        req.session.color = req.body.color;
        res.render('theme', {
            title: req.session.color
        });
    }




}

module.exports = controllerss;