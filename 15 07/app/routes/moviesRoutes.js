var express = require('express');
var router = express.Router();
let moviesController = require('../controllers/moviesController');

/* GET users listing. */
router.get('/', moviesController.list);

router.get('/create', moviesController.create);

router.post('/create', moviesController.created);

router.get('/detail/:id', moviesController.detail);

router.delete('/delete/:id', moviesController.delete);

router.get('/edit/:id/', moviesController.edit);

router.put('/edit/:id/', moviesController.edited);



module.exports = router;
