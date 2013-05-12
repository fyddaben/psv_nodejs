var db=require('../util/mondb');
var util=require('../util/mon_util');
var Constant=require('../util/Constant');

var psv_comm={
    add:function(req,callback){
    	//console.log("add str");
    	var createTime=Constant.currentDate();
    	var username= req.session.username;
    	var content=req.body.content;
    	var psvg_id=req.body.psvg_id;
    	//console.log(createTime+":"+username+":"+content);：
    	var sql1="\"psvg_Fid\":\""+psvg_id+"\",\"username\":\""+username+"\",\"content\":\""+content+"\",\"createTime\":\""+createTime+"\"";
        util.add('psv_comm',sql1,'psvCom_id',callback);
    },
    query:function(psvg_id,rowCount,ipage,callback){
       var param=",{\"psvg_Fid\":\""+psvg_id+"\"}";
       util.queryList('psv_comm',param,'\"createTime\":-1',(ipage-1)*rowCount,rowCount,callback);
    }


}
module.exports=psv_comm;