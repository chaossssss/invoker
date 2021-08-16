第一种
在el-menu标签中添加router属性，然后在el-menu-item有两种方式
```
<el-menu-item index="1-1" route="/about">选项1</el-menu-item>
这种index是没用的
<el-menu-item index="/about">选项2</el-menu-item>
这种用的是index的值
```
第二种
导航当前项，在el-menu标签中绑定:default-active="$route.path",当$route.path等于el-menu-item标签中的index属性值时则该item为当前项。