var util=require('../util/mon_util');
var Constant=require('../util/Constant');
var psv_user={
    add:function(req,callback){
            var username=req.body.username;
            var password=req.body.password;
            var sex1=req.body.sex1;//男性
            var sex2=req.body.sex2;//女性
           // console.log(username);
            var sql1="\"username\":\""+username+"\",\"password\":\""+password+"\",\"sex_man\":\""+sex1+"\",\"sex_woman\":\""+sex2+"\"";
             sql1=sql1+",\"user_creatTime\":\""+Constant.currentDate()+"\"";
            //console.log(sql1);
            util.add('psv_user',sql1,'user_id',callback);
    },
    query:function(req,callback){
          var params=",{\"username\":\""+req.body.username+"\"}";
    	    util.queryInt('psv_user',params,callback);
    },
    checkLogin:function(req,callback){
          var params=",{\"username\":\""+req.body.username+"\"},{\"password\":\""+req.body.password+"\"}";
         // console.log(params);
          util.queryInt('psv_user',params,callback);
      
    }

}
module.exports=psv_user;