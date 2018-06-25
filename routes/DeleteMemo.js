var express = require('express');
var router = express.Router();
var data = new Object();
var client = require("../config");

router.post('/' ,function (req, res, next) {
    var uid = req.body.userid;
    var mid = req.body.id;
    Number(uid,mid);
    var sql = "delete from memoapp where user_id = " + uid + "AND id = "+ mid + ";";
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