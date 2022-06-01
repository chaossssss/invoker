react报错总结
Warning: Functions are not valid as a React child. 
<Route path="/" element={<App/>} />
App要<>

Matched leaf route at location “/“ does not have an element.
把component改成element


[react-router-dom使用指南（最新V6.0.1）](https://zhuanlan.zhihu.com/p/431389907)


Switch 当有匹配的路由的时候，只渲染一个路由

路由地址：　　 内容：

　　/　　 　　　　根

　　/user 　　　　用户

　　/user/hh　　　用户笑了

先说exact：(此时没有Switch)，给 / 设置exact精确匹配

　　地址栏： /user/hh

　　渲染2个组件 :
　　　　用户
　　　　用户笑了

再说Switch:(此时没有exact)
　　地址栏：/user 或者 /user/hh
　　只渲染1个组件：
　　　　　　　　根

当既有Switch又有exact时
　　　　地址栏　　 -> 　　渲染
　　　　/user 　　 ->　　  用户
　　　　/user/hh     ->       用户 (不会渲染：用户笑了。
因为Switch匹配一个后就停止匹配，在 / 上加exact后只有当地址栏是 / 时才匹配到)