一、gitbash敲指令
二、用SSH Secure Shell Client来传输文件

1.登录                   
ssh -p22 omd@192.168.25.137               
2.直接执行命令  -->最好全路径                   
ssh root@192.168.25.137 ls -ltr /backup/data                       
==>ssh root@192.168.25.137 /bin/ls -ltr /backup/data               
3.查看已知主机                    
cat /root/.ssh/known_hosts
4.ssh远程执行sudo命令
ssh -t omd@192.168.25.137 sudo rsync hosts /etc/

5.scp               
1.功能   -->远程文件的安全(加密)拷贝                   
scp -P22 -r -p /home/omd/h.txt omd@192.168.25.137:/home/omd/               
2.scp知识小结                   
scp是加密远程拷贝，cp为本地拷贝                   
可以推送过去，也可以拉过来                   
每次都是全量拷贝(效率不高，适合第一次)，增量拷贝用rsync

6.ssh自带的sftp功能               
1.Window和Linux的传输工具                   
wincp   filezip                   
sftp  -->基于ssh的安全加密传输                   
samba   
2.sftp客户端连接                   
sftp -oPort=22 root@192.168.25.137                   
put /etc/hosts /tmp                   
get /etc/hosts /home/omd   
3.sftp小结：                   
1.linux下使用命令： sftp -oPort=22 root@x.x.x.x                   
2.put加客户端本地路径上传                  
3.get下载服务器端内容到本地                   
4.远程连接默认连接用户的家目录