https://blog.csdn.net/qq_38608304/article/details/133647535


let routeData = router.resolve({
   name: "searchGoods",
   query: params,
   params:{catId:params.catId}
});
window.open(routeData.href, '_blank');