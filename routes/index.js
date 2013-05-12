
/*
 * GET home page.
 */
var url = require('url');
var util = require('util');
var psv_data=require('./module/psv_data');

var psv_user=require('./module/psv_user');

var psv_comm=require('./module/psv_comm');
var Constant=require('./util/Constant');

//var logger=require('../log/log');
exports.index = function(req, res){
    
    //var event = new EventEmitter();
    var rowCount=req.query.rowCount;
      
       var ipage=req.query.ipage;
     
       if(parseInt(rowCount)!=rowCount)
        {
           rowCount=8
        }
      
        if(parseInt(ipage)!=ipage)
        {
           ipage=1
        }
    var flag=req.query.flag;
    
   var renderServer= function(list) {
     /*
     判断是否有下页
     */
      if(list.result!=null&&list.result.length<rowCount){
         
         list["nextFlag"]='false';
      }else{
         list["nextFlag"]='true';
      }
      list["ipage"]=ipage;
      /*
     判断是否有下页
     */
     if(flag=='ajax'){//表示为ajax接口
        
        list["rescode"]='200';
        
        //var json=util.inspect(list);
        res.send(list);

     }else{
 
      res.render('index', { title: list}); 
 
     }
     
    };
   

  
    
    var url='';
     try{
       if(flag=='ajax'){//表示为ajax接口
         url=psv_data.list(rowCount,ipage,renderServer);
       }else{
         res.render('index');
       }
     }catch(e){
      
      res.send("{\"rescode\":\"500\"}");
     
     }

};
exports.common=function(req,res){
    
    var rowCount=10;
    var ipage=1;
    var queryResult=function(list){
         // logger.log("query commons 0-10");
          
          if(list.result!=null&&list.result.length<rowCount){
             
             list["nextFlag"]='false';
          }else{
             list["nextFlag"]='true';
          }
          list["ipage"]=ipage;
          list["rescode"]='200';
          res.send(list);
    }
    var addResult=function(result){
        var id=req.body.psvg_id;
       // logger.log("评论添加成功");
        psv_comm.query(id,rowCount,ipage,queryResult);

    }

    try{
       
         psv_comm.add(req,addResult);

    }catch(e){
       res.send("{\"rescode\":\"500\"}");
    }

};
exports.query_com=function(req,res){

     var rowCount=req.query.rowCount;
      
     var ipage=req.query.ipage;
     var queryResult=function(list){
 
          if(list.result!=null&&list.result.length<rowCount){
             
             list["nextFlag"]='false';
          }else{
             list["nextFlag"]='true';
          }
          list["ipage"]=ipage;
          list["rescode"]='200';
        
          res.send(list);
     }
     try{
      
     
        if(parseInt(rowCount)!=rowCount)
        {
           rowCount=10
        }
      
        if(parseInt(ipage)!=ipage)
        {
           ipage=1
        }

          var id=req.query.psvg_id;
          psv_comm.query(id,rowCount,ipage,queryResult);

    }catch(e){
       res.send("{\"rescode\":\"500\"}");
    }


};
exports.content = function(req, res){
  
  
   //var event = new EventEmitter();
     var detailServer=function(list) {
           
           var result=list.result[0];
            if(req.session.username){
            
             result["username"]=req.session.username;
             }else{
              result["username"]='';
             }
          
         res.render('content', { psvg: result });
     };
    
     try{
        var psvg_id=req.params.id;
        
        var object=",{\"psvg_id\":"+psvg_id+"}";
         
        psv_data.queryByObject(object,detailServer);
     
     }catch(e){
      
      res.send("{\"rescode\":\"500\"}");
     
     }
};
/*
test page
*/
exports.test=function(req, res){
   
      
  res.send('username:'+Constant.username+"pwd:"+Constant.pwd+"Db_path:"+Constant.Db_path+"Db_port:"+Constant.Db_port+"Db_base:"+Constant.Db_base);
};
exports.get_reg=function(req, res){
  
  res.render('reg', { title: 'Express' });
};
exports.post_reg=function(req, res){
     
     var resend=function (result){
         
         req.session.cookie.maxAge = Constant.sessionTime;
         req.session.username = req.body.username;

         res.send({"rescode":"200"});
     //  logger.log("username add success");
    }
    var ensureAdd=function(result){
      if(result.result!=null&&result.result.length>0){
             res.send({"rescode":"400"});
      //   logger.log("username repeat");
      }else{
       // logger.log("username good");
         try{
           psv_user.add(req,resend);
        }catch(e){
             res.send({"rescode":"500"});
        }  
      }
    
    }
    try{
      var username=req.body.username;
      var password=req.body.password;
      var sex1=req.body.sex1;
      var sex2=req.body.sex2;
      //logger.log(username+":"+password+":"+sex1+":"+sex2);

       psv_user.query(req,ensureAdd);
    }catch(e){
           res.send({"rescode":"500"});
    }
      
  
};
exports.login=function(req,res){
      var ensureAdd=function(result){
   
      if(result.result!=null&&result.result.length>0){
            res.send({"rescode":"200"});
            req.session.cookie.maxAge = Constant.sessionTime;
            req.session.username = req.body.username;
      }else{
            res.send({"rescode":"404"});
             
      }
      
    }
    try{
       psv_user.checkLogin(req,ensureAdd);
    }catch(e){
           res.send({"rescode":"500"});
    }
    
}

exports.logout=function(req,res){
       req.session.username='';
     
       res.send({"rescode":"200"});
}
/*
后台路由配置
*/

//后台列表
exports.back_psv_list=function(req, res){
   // var event = new EventEmitter();
    var rowCount=req.query.rowCount;
      
       var ipage=req.query.ipage;
     
       if(parseInt(rowCount)!=rowCount)
        {
           rowCount=8
        }
      
        if(parseInt(ipage)!=ipage)
        {
           ipage=1
        }

    var renderServer=function(list) {
     
     var flag=req.query.flag;
     /*
     判断是否有下页
     */
      if(list.result!=null&&list.result.length<rowCount){
         
         list["nextFlag"]='false';
      }else{
         list["nextFlag"]='true';
      }
      list["ipage"]=ipage;
      /*
     判断是否有下页
     */
     if(flag=='ajax'){//表示为ajax接口
        
        list["rescode"]='200';
        
        res.send(list);

     }else{
 
      res.render('back/psv_list', { title: list}); 
 
     }
     
    };
   

   
    var url='';
     try{

      url=psv_data.list(rowCount,ipage,renderServer);
     
     }catch(e){
      
      res.send("{\"rescode\":\"500\"}");
     
     }
  
};
//后台详情页
exports.back_psv_detail=function(req, res){
   // var event = new EventEmitter();
   var detailServer=function(list) {
           
        
         var result=list.result[0];
         res.render('back/psv_update', { psvg: result });
     };
    
     try{
        var psvg_id=req.query.psvg_id;
        
        var object=",{\"psvg_id\":"+psvg_id+"}";
      
        psv_data.queryByObject(object,detailServer);
     
     }catch(e){
      
      res.send("{\"rescode\":\"500\"}");
     
     }
 
};
exports.back_psv_addpage=function(req, res){
  res.render('back/psv_add');
};
exports.back_psv_update=function(req, res){
   try{
     
       var sqlup= psv_data.update(req);
     
     res.send("修改成功,<a href='/back/psv/list'><<<<<<返回列表页</a>");
     
     }catch(e){
     
      res.send("{\"rescode\":\"500\"}");
     
     }

};
exports.back_psv_add=function(req, res){

   try{
     psv_data.add(req);
     res.send("修改成功,<a href='/back/psv/list'><<<<<<返回列表页</a>");
     }catch(e){
     	res.send("{\"rescode\":\"500\"}");
     }


};
