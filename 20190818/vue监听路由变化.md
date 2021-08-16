// 监听,当路由发生变化的时候执行
watch:{
  $route(to,from){
    console.log(to.path);
  }
},