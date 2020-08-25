var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/cantidad', productsController.cantidad);

router.get('/lastprod', productsController.lastprod);

router.get('/categories', productsController.categories);

router.get('/grill', productsController.grill);






module.exports = router;
