var express = require('express');
var router = express.Router();



// Mall API
/* Customer login with account and password */
router.post('/login', function(req, res, next) { 
    console.log(req.body)
    res.send('Invoke login service');
});

/* Customer register with account, password, email */
router.post('/register', function(req, res, next) { 
    console.log(req.body)
    res.send('nvoke registry service');
});


/* get profile image. */
router.post('/profileImage', function(req, res, next) {

    console.log("(/profileImage) req body:", req.body)
    let url = `/public/images/accounts/${req.body.fileName}`
    res.send(url)

    // let path = 'public/images/accounts/logo.jpg'
    // const data = fs.readFile(path, function(error, data) {
    //     if (err) {
    //         res.send('(/profileImage) Error: Failed to send image.')
    //     } else {
    //         res.send(img)
    //     }
    // })
});



// CMS API
/* GET customers listing. */
router.get('/list', function(req, res, next) {
    res.send('respond with a resource');
  });
module.exports = router;
