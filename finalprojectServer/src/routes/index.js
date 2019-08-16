var express = require('express');
var router = express.Router();

const diary = require('./diary');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/diary',diary);

module.exports = router;
