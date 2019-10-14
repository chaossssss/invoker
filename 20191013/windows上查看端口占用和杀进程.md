查看3000端口占用，并显示PID
netstat -ano | findstr "3000"

强行终止进程6620
taskkill -PID 6620 -F