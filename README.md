psv_node
========

nothing
接口规则：
				 "resCode":{
				       "200":"表示正常",
				       "400":"表示用户名重复",
				       "404":"表示用户民或者密码错误",
				       "500":"表示服务器异常"
				      }
接口分类:
        用户界面接口:
                    用户注册接口:{
                                   "method":"post",
                                   "request":{
                                             "username":"fydaben",
                                             "password":"XXXXXXX",
                                             "sex1":"on",
                                             "sex2":"off"
                                             },
                                   "response":{
                                              "resCode":"200||400"
                                              }
                                  }
                                              
                    用户登陆接口:{
                                  "method":"get",
                                  "request":{
                                             "username":"fydaben",
                                             "password":"XXXXXXX",
                                            },
                                  "response":{
                                             "resCode":"200||404"
                                             }
                                 }
                    
        产品展示接口:
                    游戏首页列表展示接口:{
                                           
                                           "method":"get",
                                           "request":{
                                                     "rowCount":"15",
                                                     "ipage":"1"
                                                     },
                                           "response":{
                                                     "resCode":"200||500",
                                                     "nextPage""true||false",// 是否有下一页
                                                     "psv_list":[
                                                               {
                                                                "psvg_id":"12",
                                                                "psvg_name":"忍者龙剑传",
                                                                "psvg_Simg":"//adsfas.jpg",
                                                                "psvg_SimplCon":"这个游戏太好玩了，就是自己水平太差，一直没有通关，对不起这血汗钱啊",
                                                                "psvg_dollar":"198",
                                                                "psvg_creatTime":"2003-03-16 24:25:25"
                                                                
                                                               }
                                                     ]
                                                    }
                                         }
                    
                    游戏内容+评论接口   {
                                           
                                           "method":"get",
                                           "request":{
                                                     "psvg_id":"12"
                                                     },
                                           "response":{
                                                                "resCode":"200||500",
                                                                "psvg_id":"12",
                                                                "psvg_name":"忍者龙剑传",
                                                                "psvg_Bimg":"//adsfasd.jpg",
                                                                "psvg_SimplCon":"这个游戏太好玩了，就是自己水平太差，一直没有通关，对不起这血汗钱啊",
                                                                "psvg_dollar":"198",
                                                                "psvg_creatTime":"2003-03-16 24:25:25",
                                                                "psvg_source":"电玩巴士",
                                                                "rowCount":"15", 
						                                                    "ipage":"1(当加载第二页的评论时，完全可以不传内容数据)",
						                                                    "allCount":"102",
						                                                    "allpage":"12",
                                                                "psvg_comment":[{
                                                                                 "comment_user":"daben",
                                                                                 "comment_content":"拉萨的发的顺丰",
                                                                                 "comment_time":"2012-02-02 02:02:02"
                                                                                }
                                                                                ]                              
                                                     
                                                    }
                                         }
                    
               
                    
                    游戏内容评论增加接口{
			                                   "method":"post",
			                                   "request":{
			                                             "username":"fydaben",
			                                             "comment_content":"a阿迪萨斯的发生地方"
			                                             },
			                                   "response":{
			                                              "resCode":"200||400"
			                                              }
			                                  }
        
        后台修改接口:
                     游戏内容增加接口{
			                                   "method":"post",
			                                   "request":{
			                                             "psvg_name":"忍者龙剑传",
                                                   "psvg_Simg":"//adsfas.jpg",
                                                   "psvg_Bimg":"//adsfasd.jpg",
                                                   "psvg_SimplCon":"这个游戏太好玩了，就是自己水平太差，一直没有通关，对不起这血汗钱啊",
                                                   "psvg_dollar":"198",
                                                   "psvg_source":"电玩巴士",
                                                   "psvg_creatTime":"2003-03-16 24:25:25"
			                                             },
			                                   "response":{
			                                              "resCode":"200||400"
			                                              }
			                                  }
                     游戏内容修改接口{
			                                   "method":"put",
			                                   "request":{
			                                             "psvg_id":"12",
			                                             "psvg_name":"忍者龙剑传",
                                                   "psvg_Simg":"//adsfas.jpg",
                                                   "psvg_Bimg":"//adsfasd.jpg",
                                                   "psvg_SimplCon":"这个游戏太好玩了，就是自己水平太差，一直没有通关，对不起这血汗钱啊",
                                                   "psvg_dollar":"198",
                                                   "psvg_source":"电玩巴士",
                                                   "psvg_creatTime":"2003-03-16 24:25:25"
			                                             },
			                                   "response":{
			                                              "resCode":"200||400"
			                                              }
			                                  }
                     