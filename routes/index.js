var express = require('express');
var router = express.Router();
var es = require('../controllers/Entry')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post ('/Add' , es.Add )
router.get('/Allget' ,es.Allget)
router.get('/get/:id' ,es.get)
router.patch('/update/:id' ,es.update)
router.delete('/delete/:id' ,es.delete)

module.exports = router;
