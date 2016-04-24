var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/index.html');
});
router.get('/research', function(req, res, next) {
	  res.render('http://www.rcec.sinica.edu.tw/~cylin/lab/performance.htm');
});


module.exports = router;
