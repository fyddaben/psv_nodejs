psv_node
========

nothing
�ӿڹ���
				 "resCode":{
				       "200":"��ʾ����",
				       "400":"��ʾ�û����ظ�",
				       "404":"��ʾ�û�������������",
				       "500":"��ʾ�������쳣"
				      }
�ӿڷ���:
        �û�����ӿ�:
                    �û�ע��ӿ�:{
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
                                              
                    �û���½�ӿ�:{
                                  "method":"get",
                                  "request":{
                                             "username":"fydaben",
                                             "password":"XXXXXXX",
                                            },
                                  "response":{
                                             "resCode":"200||404"
                                             }
                                 }
                    
        ��Ʒչʾ�ӿ�:
                    ��Ϸ��ҳ�б�չʾ�ӿ�:{
                                           
                                           "method":"get",
                                           "request":{
                                                     "rowCount":"15",
                                                     "ipage":"1"
                                                     },
                                           "response":{
                                                     "resCode":"200||500",
                                                     "nextPage""true||false",// �Ƿ�����һҳ
                                                     "psv_list":[
                                                               {
                                                                "psvg_id":"12",
                                                                "psvg_name":"����������",
                                                                "psvg_Simg":"//adsfas.jpg",
                                                                "psvg_SimplCon":"�����Ϸ̫�����ˣ������Լ�ˮƽ̫�һֱû��ͨ�أ��Բ�����Ѫ��Ǯ��",
                                                                "psvg_dollar":"198",
                                                                "psvg_creatTime":"2003-03-16 24:25:25"
                                                                
                                                               }
                                                     ]
                                                    }
                                         }
                    
                    ��Ϸ����+���۽ӿ�   {
                                           
                                           "method":"get",
                                           "request":{
                                                     "psvg_id":"12"
                                                     },
                                           "response":{
                                                                "resCode":"200||500",
                                                                "psvg_id":"12",
                                                                "psvg_name":"����������",
                                                                "psvg_Bimg":"//adsfasd.jpg",
                                                                "psvg_SimplCon":"�����Ϸ̫�����ˣ������Լ�ˮƽ̫�һֱû��ͨ�أ��Բ�����Ѫ��Ǯ��",
                                                                "psvg_dollar":"198",
                                                                "psvg_creatTime":"2003-03-16 24:25:25",
                                                                "psvg_source":"�����ʿ",
                                                                "rowCount":"15", 
						                                                    "ipage":"1(�����صڶ�ҳ������ʱ����ȫ���Բ�����������)",
						                                                    "allCount":"102",
						                                                    "allpage":"12",
                                                                "psvg_comment":[{
                                                                                 "comment_user":"daben",
                                                                                 "comment_content":"�����ķ���˳��",
                                                                                 "comment_time":"2012-02-02 02:02:02"
                                                                                }
                                                                                ]                              
                                                     
                                                    }
                                         }
                    
               
                    
                    ��Ϸ�����������ӽӿ�{
			                                   "method":"post",
			                                   "request":{
			                                             "username":"fydaben",
			                                             "comment_content":"a������˹�ķ����ط�"
			                                             },
			                                   "response":{
			                                              "resCode":"200||400"
			                                              }
			                                  }
        
        ��̨�޸Ľӿ�:
                     ��Ϸ�������ӽӿ�{
			                                   "method":"post",
			                                   "request":{
			                                             "psvg_name":"����������",
                                                   "psvg_Simg":"//adsfas.jpg",
                                                   "psvg_Bimg":"//adsfasd.jpg",
                                                   "psvg_SimplCon":"�����Ϸ̫�����ˣ������Լ�ˮƽ̫�һֱû��ͨ�أ��Բ�����Ѫ��Ǯ��",
                                                   "psvg_dollar":"198",
                                                   "psvg_source":"�����ʿ",
                                                   "psvg_creatTime":"2003-03-16 24:25:25"
			                                             },
			                                   "response":{
			                                              "resCode":"200||400"
			                                              }
			                                  }
                     ��Ϸ�����޸Ľӿ�{
			                                   "method":"put",
			                                   "request":{
			                                             "psvg_id":"12",
			                                             "psvg_name":"����������",
                                                   "psvg_Simg":"//adsfas.jpg",
                                                   "psvg_Bimg":"//adsfasd.jpg",
                                                   "psvg_SimplCon":"�����Ϸ̫�����ˣ������Լ�ˮƽ̫�һֱû��ͨ�أ��Բ�����Ѫ��Ǯ��",
                                                   "psvg_dollar":"198",
                                                   "psvg_source":"�����ʿ",
                                                   "psvg_creatTime":"2003-03-16 24:25:25"
			                                             },
			                                   "response":{
			                                              "resCode":"200||400"
			                                              }
			                                  }
                     