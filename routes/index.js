var express = require('express');
var router = express.Router();
const multer = require('multer');
let path = require('path');

let controller = require('../Controllers/controllers.js');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

  

/* GET home page. */
router.get('/', controller.mostrarIndex);

router.get('/search', controller.encontrado);

router.get('/products', controller.mostrarTodos);

router.get('/crear', controller.crear);

router.post('/creado', controller.creando);

router.get('/registro', controller.registro);

router.post('/registrado', upload.any(), controller.registrado);

module.exports = router;
