var express = require('express');
var router = express.Router();
var data = new Object();
var client = require("../config");

router.get('/all' ,function (req, res, next) {
    var uid = req.query.userid;
    Number(uid);
    var sql = "select * from memoapp where user_id = " + uid + ";";
    client.query(sql, function(err,results, next){
        if(err){
            return err;
        } else {
            console.log(results);
            data = results.rows;
            res.send(data);
            console.log("success");
        }
    });
});
router.get('/single' ,function (req, res, next) {
    var uid = req.query.userid;
    var mid = req.query.id;
    Number(uid,mid);
    var sql = "select * from memoapp where user_id = " + uid + "and id = " + mid + ";";
    client.query(sql, function(err,results, next){
        if(err){
            return err;
        } else {
            console.log(results);
            data = results.rows;
            res.send(data);
            console.log("success");
        }
    });
});

module.exports = router;