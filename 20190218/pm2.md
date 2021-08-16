pm2 管理进程


pm2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务
网上介绍的大多数是直接运行js文件的
而我现在gulp的项目是直接敲`gulp`命令来启动,虽然可以用shelljs来弥补，但多少有些麻烦
```
一些常用指令
pm2 logs 显示所有进程日志
pm2 stop all 停止所有进程
pm2 restart all 重启所有进程
pm2 reload all 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 stop 0 停止指定的进程
pm2 restart 0 重启指定的进程
pm2 startup 产生 init 脚本 保持进程活着
pm2 web 运行健壮的 computer API endpoint (http://localhost:9615)
pm2 delete 0 杀死指定的进程
pm2 delete all 杀死全部进程
 

运行进程的不同方式：
pm2 start app.js -i max 根据有效CPU数目启动最大进程数目
pm2 start app.js -i 3 启动3个进程
pm2 start app.js -x 用fork模式启动 app.js 而不是使用 cluster
pm2 start app.js -x -- -a 23 用fork模式启动 app.js 并且传递参数 (-a 23)
pm2 start app.js --name serverone 启动一个进程并把它命名为 serverone
pm2 stop serverone 停止 serverone 进程
pm2 start app.json 启动进程, 在 app.json里设置选项
pm2 start app.js -i max -- -a 23 在--之后给 app.js 传递参数
pm2 start app.js -i max -e err.log -o out.log 启动 并 生成一个配置文件
```