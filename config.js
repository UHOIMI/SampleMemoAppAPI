/**
 * Created by sanwa on 2018/06/11.
 */
// {
//     "postgreSql.dbName": "postgres OR THE DB YOU WANT TO CONNECT TO",
//     "postgreSql.hostName": "YOUR POSTGRES SERVER",　　　　host:"172.16.89.156",
//     "postgreSql.username": "YOUR POSTGRES USERNAME"
// }


var db;
var pg = require('pg');
var config = {
    user:"postgres",
    host:"45.62.247.87",
    database:"samplememoapp",
    password:"Minosannv1",
}
var client = new pg.Client(config);
client.connect(function(err) {
    if(err) console.error(err);
});

module.exports = client;