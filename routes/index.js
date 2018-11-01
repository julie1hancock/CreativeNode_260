var express = require('express');
var router = express.Router();
var fs = require('fs');
  
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/getfact',function(req,res,next) {
    var myNum = req.query.q;

    fs.readFile(__dirname + '/facts.txt',function(err,data) {
        if(err) throw err;
        var facts = data.toString().split("\n");
      
        var jsonresult = [];
        jsonresult.push({fact:facts[myNum]});
        console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});

router.get('/getquote',function(req,res,next) {
    var myNum = req.query.q;
    fs.readFile(__dirname + '/quotes.txt',function(err,data) {
        if(err) throw err;
        var facts = data.toString().split("\n");
        var q = facts[myNum];
        var s = q.toString().split("-");
        var jsonresult = [];
        jsonresult.push({fact:s[0], cite:s[1]});
        console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});

router.get('/getimg',function(req,res,next) {
    var myNum = req.query.q;
    fs.readFile(__dirname + '/pics.txt',function(err,data) {
        if(err) throw err;
        var facts = data.toString().split("\n");
      
        var jsonresult = [];
        jsonresult.push({fact:facts[myNum]});
        console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});

module.exports = router;
