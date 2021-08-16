一. <router-link>标签实现新窗口打开：
```
<router-link tag="a" target="_blank" :to="{name:'searchGoods',params:{catId:0},query:{keywords:'手机'}}">热门好货</router-link>
```
二. 编程式导航：
```
let routeData = this.$router.resolve({
   name: "searchGoods",
   query: params,
   params:{catId:params.catId}
});
window.open(routeData.href, '_blank');
```
三、直接使用a标签