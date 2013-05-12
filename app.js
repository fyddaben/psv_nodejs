
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.VCAP_APP_PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  //啟動cookieParser
  app.use(express.cookieParser());
  //設定加密HashKey
  app.use(express.session({secret : "@5%skdg"}));

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({  keepExtensions: true, uploadDir: __dirname + '/public/upload'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
var mongo;
 var util=require('./routes/util/Constant');
app.configure('development', function(){
  app.use(express.errorHandler());
  mongo = {
        "hostname":util.Db_path,
        "port":util.Db_port,
        "username":util.username,
        "password":util.pwd,
        "name":"",
        "db":util.Db_base
    }
});
app.configure('production', function(){
    var env = JSON.parse(process.env.VCAP_SERVICES);
    mongo = env['mongodb-1.8'][0]['credentials'];
});

 

var generate_mongo_url = function(obj){
    util.Db_path = (obj.hostname || 'localhost');
    util.Db_port = (obj.port || 27017);
    util.Db_base = (obj.db || 'test');
    if(obj.username && obj.password){
      util.username=obj.username;
      util.pwd=obj.password;
    }
    
}
generate_mongo_url(mongo);

  

app.get('/', routes.index);//查询用get
app.get('/users', user.list);

app.get('/psv/:id', routes.content);//查询用get
app.get('/test', routes.test);
app.get('/reg', routes.get_reg);//展示注册页
app.post('/reg', routes.post_reg);//注册是添加内容用post
app.post('/login', routes.login);//注册是添加内容用post
app.post('/logout', routes.logout);//注册是添加内容用post
app.post('/common',routes.common);//评论内容添加
app.get('/common',routes.query_com);
/*
  后台路径/back
*/
app.get('/back/psv/list',routes.back_psv_list);//列表页面
app.get('/back/psv/',routes.back_psv_detail);//通过id，获得详情页
app.get('/back/psv/add.html',routes.back_psv_addpage);//静态页面
app.post('/back/psv/update',routes.back_psv_update);//修改接口
app.post('/back/psv/',routes.back_psv_add);//新增接口

http.createServer(app).listen(app.get('port'), function(){

 console.log("Express server listening on port " + app.get('port'));
});

