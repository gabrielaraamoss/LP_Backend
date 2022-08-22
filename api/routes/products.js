const express = require('express');
var request = require('request');
const router = express.Router();



router.get('/',function(req,res,next){
    var options = {
        method: 'GET',
        url: 'https://www.fruityvice.com/api/fruit/all'
    }
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
      });
});


router.get('/:name_fruit',function(req,res,next){
    var options = {
        method: 'GET',
        url: 'https://www.fruityvice.com/api/fruit/' + `${req.params.name_fruit}`
    }
    request(options, function (error, response, body) {
        console.log('prueba',response)
        if (error) throw new Error(error);
        res.send(body);
      });
});


module.exports = router ;