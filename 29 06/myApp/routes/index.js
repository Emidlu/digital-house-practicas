var express = require('express');
var router = express.Router();
let controller = require('../controllers/controllers')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: req.session.color
  });
});

router.get('/theme', controller.tema);

router.post('/theme', controller.cambioColor);




module.exports = router;