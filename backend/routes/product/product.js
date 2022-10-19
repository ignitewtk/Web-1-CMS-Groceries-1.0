var express = require('express');
var products = require('./configProducts')

var router = express.Router();

/* get products list. */
router.post('/list', function(req, res, next) {
    console.log(req.data)
    console.log(products)
  res.send('respond with a resource');
});

module.exports = router;
