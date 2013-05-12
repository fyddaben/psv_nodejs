var db=require('../util/mondb');
var util=require('../util/mon_util');
var Constant=require('../util/Constant');

var psv_data={
   add:function(req){
        var psvg_name=req.body.psvg_name;
        psvg_name=Constant.removeNull(psvg_name);
        var psvg_Bimg=req.files.psvg_Bimg.path;
        //截取upload下的路径
        var bimg_int=psvg_Bimg.indexOf('upload');

         if(bimg_int!=-1){
           psvg_Bimg=psvg_Bimg.substring(bimg_int+7);
          
        }
        var psvg_Simg=req.files.psvg_Simg.path;
        var simg_int=psvg_Simg.indexOf('upload');

        if(simg_int!=-1){
          psvg_Simg=psvg_Simg.substring(simg_int+7);
          
        }
        var psvg_dollar=req.body.psvg_dollar;
       
        var psvg_SimplCon=req.body.psvg_SimplCon;
        // console.log(psvg_SimplCon);
        psvg_SimplCon=Constant.removeDou(psvg_SimplCon);
       // console.log(psvg_SimplCon);
        psvg_SimplCon=Constant.removeNull(psvg_SimplCon);
        // console.log(psvg_SimplCon);
        var psvg_source=req.body.psvg_source;
        
        var sql1="\"psvg_name\":\""+psvg_name+"\",\"psvg_Bimg\":\""+psvg_Bimg+"\",\"psvg_Simg\":\""+psvg_Simg+"\",\"psvg_dollar\":\""+psvg_dollar+"\",\"psvg_SimplCon\":\""+psvg_SimplCon+"\",\"psvg_source\":\""+psvg_source+"\"";
        sql1=sql1+",\"psvg_creatTime\":\""+Constant.currentDate()+"\"";
        util.add('psv_data',sql1,'psvg_id');
        
   },
   update:function(req){
        var psvg_name=req.body.psvg_name;
        psvg_name=Constant.removeNull(psvg_name);
        var psvg_Bimg=req.files.psvg_Bimg.path;
        
        var bimg_int=psvg_Bimg.indexOf('upload');
        if(bimg_int!=-1){
           psvg_Bimg=psvg_Bimg.substring(bimg_int+7);
          
        }
        
        var psvg_Simg=req.files.psvg_Simg.path;
        var simg_int=psvg_Simg.indexOf('upload');
        
        if(simg_int!=-1){
        psvg_Simg=psvg_Simg.substring(simg_int+7);
          
        }
        
        //psvg_Simg=psvg_Simg.substring(simg_int+7);
        
        var psvg_dollar=req.body.psvg_dollar;
       
        var psvg_SimplCon=req.body.psvg_SimplCon;
        
        psvg_SimplCon=Constant.removeDou(psvg_SimplCon);
       
        psvg_SimplCon=Constant.removeNull(psvg_SimplCon);
        
        var psvg_source=req.body.psvg_source;
        
        var psvg_id=req.body.psvg_id;
        var sql1="{\"psvg_id\":"+psvg_id+",\"psvg_name\":\""+psvg_name+"\",\"psvg_Bimg\":\""+psvg_Bimg+"\",\"psvg_Simg\":\""+psvg_Simg+"\",\"psvg_dollar\":\""+psvg_dollar+"\",\"psvg_SimplCon\":\""+psvg_SimplCon+"\",\"psvg_source\":\""+psvg_source+"\"";
        sql1=sql1+",\"psvg_creatTime\":\""+Constant.currentDate()+"\"}";
        return  util.update('psv_data',"{\"psvg_id\":"+psvg_id+"}",sql1);
   },
   list:function(rowCount,ipage,callback){
       
       var sql= util.queryList('psv_data','','\"psvg_creatTime\":-1',(ipage-1)*rowCount,rowCount,callback);
       
       return sql;

   },
   queryByObject:function(object,callback){
       
       var sql= util.queryList('psv_data',object,'\"psvg_creatTime\":-1',0,1,callback);
       
       return sql;

   }
}

module.exports=psv_data;