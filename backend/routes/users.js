var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/aaa', function(req, res, next) {
  res.send('respond with a resource aaa');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource /');
});

module.exports = router;
