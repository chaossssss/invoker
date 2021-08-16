[vue浏览器返回监听](https://blog.csdn.net/bocongbo/article/details/81667054)

分享页面时，希望点击浏览器回退按钮，回到项目首页，增加访问量。

需要监听浏览器的回退按钮，并阻止其默认事件。

具体步骤如下：

1、挂载完成后，判断浏览器是否支持popstate

```
mounted(){
  if (window.history && window.history.pushState) {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', this.goBack, false);
  }
},
```


2、页面销毁时，取消监听。否则其他vue路由页面也会被监听
```
destroyed(){
  window.removeEventListener('popstate', this.goBack, false);
},
```

3、将监听操作写在methods里面，removeEventListener取消监听内容必须跟开启监听保持一致，所以函数拿到methods里面写
```
methods:{
  goBack(){
    this.$router.replace({path: '/'});
    //replace替换原路由，作用是避免回退死循环
  }
}
```