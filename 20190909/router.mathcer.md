替换routes的写法
// 替换现有router的routes
router.matcher = new VueRouter({
  routes: newRoutes
}).matcher