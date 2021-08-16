最近在用elementUI,有时候想要多传个参数
方法是加个回调函数,下面是menu添加自定义参数
```
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
@open="handleOpen"
@close="handleClose" :router="true" @select="((index,indexPath)=>{getRouter(index,indexPath,'1')})">
```