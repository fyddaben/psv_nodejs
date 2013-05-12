
var db=require('./mondb');
var Constant=require('./Constant');
var util=require('util');
//var logger=require('../../log/log');
var opendb={
	configure:function (sql,callback,db){

		   

               db.eval('function () { '+sql+' }', function(err, result) {
                     if(err)console.log(err);
                   //  logger.debug('connect...ok');
                     db.close();
                      if(callback){
                       // console.log('callback exists');
                        callback(result);
                      }
                  });

          
       },
   execute:function(sql,callback){
     db.open(function(err,db){
           if(err == null && Constant.username!=''&&Constant.pwd!=''){
            // What db to authenticate against
            var authentication_db = db;
            
            authentication_db.authenticate(Constant.username, Constant.pwd, function(err, success){
              //console.log("asdfdsf"+success);
              if(success){
                opendb.configure(sql,callback,db);
               // console.log("user or pwd ok");
              } else {
                if(db) db.close();
               // console.log("user or pwd error");
               
              }
            });
          } else {
             // console.log('no user');
            opendb.configure(sql,callback,db);
          }
       });
   }
}


var util={
    
     add:function(tablename,jsonObject,idParam,callback){//jsonObject为字符串。例如{id:1,'age':12};
     	//首先要获得tablename里面最大的ID。然后+1.

        var maxId_sql='return db.'+tablename+'.aggregate( [{ $group: { _id: null,max_id: { $max: "$'+idParam+'" } } }] ).result.length==0?1:parseInt(db.'+tablename+'.aggregate( [{ $group: { _id: null,max_id: { $max: "$'+idParam+'" } } }] ).result[0].max_id)+1';
        //console.log(maxId_sql);

              db.open(function(err,db){
                 if(err == null && Constant.username!=''&&Constant.pwd!=''){
                  // What db to authenticate against
                  var authentication_db = db;
                  
                  authentication_db.authenticate(Constant.username, Constant.pwd, function(err, success){
                    //console.log("asdfdsf"+success);
                    if(success){
                            db.eval('function () {'+maxId_sql+'}', function(err, result) {
                                if(err)console.log(err);
                               
                                var sql='db.'+tablename+'.save({'+'\"'+idParam+'\":'+result+','+jsonObject+"})";
                              
                                db.eval('function () {'+sql+'}', function(err, result) {
                                          
                                    db.close();
                                    if(callback){
                                            callback(result);
                                          }
                                });
                           
                             });
                      console.log("user or pwd ok");
                    } else {
                      if(db) db.close();
                      console.log("user or pwd error");
                       
                    }
                  });
                } else {
                   console.log('no user');
                        db.eval('function () {'+maxId_sql+'}', function(err, result) {
                            if(err)console.log(err);
                           
                            var sql='db.'+tablename+'.save({'+'\"'+idParam+'\":'+result+','+jsonObject+"})";
                            
                            db.eval('function () {'+sql+'}', function(err, result) {
                                     db.close();
                                     if(callback){
                                            callback(result);
                                          }
                                
                            });
                         
                        });
                }
              


            

            });

     },
     update:function(tablename,id,jsonObject){//id为键值对的形式，例如id:1,这里并没有修改，只是先删除，再新增,
        var sql="db."+tablename+".remove("+id+");db."+tablename+".save("+jsonObject+");";
        //return sql;
         opendb.execute(sql);   
     },
     delete:function(tablename,id){
        var sql="db."+tablename+".remove("+id+");";
             opendb.execute(sql);
     },
     queryList:function(tablename,quarm,sort,start,limit,callback){
        var sql="{aggregate:\""+tablename+"\",pipeline:[" +
	 		  "{$match:{$and:[{\"_id\":{$ne:\"\"}}";
	     if(quarm!=''){
	     	sql=sql+quarm;//注意quram要有，号 
	     }
	     sql=sql+"]}}";
         if(sort!=''){//sort 格式:\"article_id\":-1
         	sql=sql+",{$sort:{"+sort+"}}";
         }
         if(start!=''){
            sql=sql+",{$skip:"+start+"}";	
         }
         if(limit!=''){
         	sql=sql+",{$limit:"+limit+"}";
         }
         sql=sql+"]}";
	    
     	var command="return db.runCommand("+sql+");";
        //  console.log(command);
         // return command;

     	  opendb.execute(command,callback);
     },
     queryInt:function(tablename,quarm,callback){
     	var sql="{aggregate:\""+tablename+"\",pipeline:[" +
    	     " {$match:{$and:["+
             " {\"_id\":{$ne:\"\"}}";
            
           if(quarm!=''){
	     	sql=sql+quarm;//注意quram要有，号 
	       }
           sql=sql+"]}}"+		
    	     ",{$group: { _id: null,count: { $sum: 1 } } }"+
	 		
	 		"  ]}";
	    var command="return db.runCommand("+sql+");";
     	opendb.execute(command,callback);
     }
}
module.exports=util;