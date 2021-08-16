Duplicate named routes definition
1.修改name
2.动态添加路由
//没试过
router.matcher = new Router({mode: 'history'}).matcher;
router.addRoutes(params)
