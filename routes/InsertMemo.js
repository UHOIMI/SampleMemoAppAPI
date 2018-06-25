var express = require('express');
var router = express.Router();
var data = new Object();
var client = require("../config");

router.post('/' ,function (req, res, next) {
    var uid = req.body.userid;
    var title = req.body.title;
    var memo = req.body.memo;
    console.log(req);
    Number(uid);
    var sql = "insert into memoapp (user_id,title,memo) values (" + uid + ",'" + title + "','" + memo + "');";
    console.log(sql);
    client.query(sql, function(err,results){
        if(err) {
            console.log(err.name);
            res.send(err);
        }else{
            console.log("success");
            res.send("success");
        }
    });
});
    
module.exports = router;