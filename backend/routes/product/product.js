
var express = require('express');
const fs = require('fs')
const path = require('path')
const url = require('url');
const { response } = require('../../app');


var router = express.Router();


/* get products list. */
router.post('/list', function(req, res, next) {
    const products = [
      {
          name: "Pork Loin",
          originPrice: 10.56,
          discountPrice: 8.99,
          rating: 3,
          // img: fs.createReadStream(path.resolve("../public/images/products/PorkLoin.jpg"))
          
      },
      {
          name: "Asian Baby Bulk Choy",
          originPrice: 2.99,
          discountPrice: 2.5,
          rating: 4,
          // img: fs.createReadStream(path.resolve("../public/images/products/Asian Baby Bulk Choy.jpg")),
      }
    ]
    console.log("(/list)req body:", req.body)
    res.send(products);
});


/* get products image. */
router.post('/image', function(req, res, next) {

  console.log("(/image) req body:", req.body)
  const pn = req.body.productName
  let url = `/public/images/products/${req.body.productName}`
  console.log(url)
  // res.send({
  //   err: 0,
  //   msg: 'ok',
  //   img: url
  // })
  res.send(url)

  // http://localhost:3050/product/image?f=Asian%20Baby%20Bulk%20Choy.jpg
  // console.log(__dirname + "/../../public/images/products/Asian Baby Bulk Choy.jpg")
  // res.sendFile(__dirname + "/../../public/images/products/Asian Baby Bulk Choy.jpg")
  
  
  // const stream = fs.createReadStream(
  //   path.resolve(__dirname, "../../public/images/products/Asian Baby Bulk Choy.jpg"))
  
  // Method 1:
  // stream.on('data', function(chunk) {
  //   res.write(chunk)
  // })
  // stream.on('end', function() {
  //   res.status(200)
  //   res.end()
  // })

  // Method 2:
  // var responseData = []
  // if (stream) {
  //   stream.on('data', function(chunk) {
  //     responseData.push(chunk)
  //   })
  //   stream.on('end', function() {
  //     var finalData = Buffer.concat(responseData)
  //     res.write(finalData)
  //     res.end()
  //   })
  // }

  // Method 3"
  // console.log("http://localhost:3050/public/images/products/"+pn)
  // const data = fs.readFile(
  //   "http://localhost:3050/public/images/products/"+pn, 
  //   function (err, data) {
  //     if (err) {
  //       res.send(err)
  //     }
  //     else {
  //       res.send(data)
  //     }
  //   })
});



router.get('/list', function(req, res, next) {
  const products = [
    {
        name: "Pork Loin",
        originPrice: 10.56,
        discountPrice: 8.99,
        rating: 3,
        // img: fs.createReadStream(path.resolve("../public/images/products/PorkLoin.jpg"))
    },
    {
        name: "Asian Baby Bulk Choy",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        // img: fs.createReadStream(path.resolve("../public/images/products/Asian Baby Bulk Choy.jpg")),
    }
  ]
  console.log(req.body)
  res.send(products);

});

module.exports = router;