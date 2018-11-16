获取到的userinfo存到globalData里面，在其他页面打开无法获取到数据。
原因是getUserInfo()这个接口是异步的，在其他页面还没有加上

app.js
```
if(this.userInfoReadyCallback){
  this.userInfoReadyCallback(res)
}
```

page.js
```
app.userInfoReadyCallback = function(){
  _this.setData({
    userInfo: app.globalData.userInfo
  })
  console.log('_this.data.userInfo',_this.data.userInfo)
}
```