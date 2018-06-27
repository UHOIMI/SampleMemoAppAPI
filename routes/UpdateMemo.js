var express = require('express');
var router = express.Router();
var data = new Object();
var client = require("../config");

router.post('/' ,function (req, res, next) {
    var uid = req.body.userid;
    var mid = req.body.id;
    var title = req.body.title;
    var memo = req.body.memo;
    Number(uid,mid);
    var sql = "UPDATE memoapp SET title = '" + title + "',memo = '" + memo + "' WHERE user_id = " + uid + "and id = " + mid + ";";
    console.log(sql);
    client.query(sql, function(err,results){
        if(err) {
            console.log(err.name);
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.send(err);
        }else{
            console.log("success");
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.send("success");
        }
    });
});

module.exports = router;