var util=require('./Constant');

  

var Db = require('mongodb').Db;
var  Server = require('mongodb').Server;
var db = new Db(util.Db_base,new Server(util.Db_path, util.Db_port));
 
module.exports=db;