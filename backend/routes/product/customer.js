var express = require('express');
var router = express.Router();

const customersAccounts = [
    {
        accountId: 1,
        accountName: 'customer1',
        password: 'customer1'
    },
    {
        accountId: 2,
        accountName: 'customer2',
        password: 'customer3'
    },
]


/* GET customers listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Customer login with account and password */
router.post('/login', function(req, res, next) { 
    console.log(req.data)
    res.send('Invoke login service');
});

/* Customer register with account, password, email */
router.post('/register', function(req, res, next) { 
    console.log(req.data)
    res.send('nvoke registry service');
});

module.exports = router;
