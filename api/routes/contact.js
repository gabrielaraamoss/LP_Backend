const express = require('express');
var request = require('request');
const router = express.Router();

router.get('/',function(req,res){
    res.status(200).json({
        message: "Handling GET request to /contact"
    })
})



module.exports = router;