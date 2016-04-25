var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/index.html');
});

router.get('/WRT', function(req, res, next) {
	  res.render('views/W_R_T.html');
});

module.exports = router;
