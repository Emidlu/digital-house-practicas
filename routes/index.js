var express = require('express');
var router = express.Router();
let usuarioAdmin = require('../middlewares/usuario-admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin',usuarioAdmin, function(req, res) {

  res.send('Bienvenido ' + req.query.user);
});




module.exports = router;
