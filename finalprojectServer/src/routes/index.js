var express = require('express');
var router = express.Router();

const diary = require('./diary');
const user = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/diary',diary);
router.use('/user',user);

module.exports = router;
