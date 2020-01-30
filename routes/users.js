var express = require('express');
var router = express.Router();
const pool = require('../db/dbConfig');
const { Client } = require('pg');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/pettycash', function(req,res){
  //res.send('Hello');
  res.send('You sent the name "' + JSON.stringify(req.body)  + '".');
});



module.exports = router;
