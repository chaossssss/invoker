[小程序Page里的函数比app.js先执行的解决办法](https://blog.csdn.net/vipbin520/article/details/84099338)
[小程序Page里的函数比app.js先执行的解决办法](https://www.cnblogs.com/shipskunkun/p/11802379.html)
```
app.js
  // 回调
  callback(res){
    if(this.callback){
      this.callback(res)
    }
  },
  //在wx.login方法最后
  // 获取token
  getToken(){
    let that = this
    wx.request({
      method: "post",
      url: api.WxIdLogin,
      data:{
        wxId: wx.getStorageSync('openId') || this.globalData.openId
      },
      success(data){
        console.log("WxIdLoginRes",data)
        // 用来校验是否有token
        that.globalData.checkToken = true
        if(data.data.data.User == null){
          wx.navigateTo({
            url: '/pages/city/account/reg/reg',
          })
        }else{

          wx.setStorageSync("token", data.data.data.Token)
          wx.setStorageSync("uesrId", data.data.data.User.UserID)
          that.globalData.token = data.data.data.Token
          that.globalData.userId = data.data.data.User.UserID
          if(that.callback){
            that.callback()
          }
        }
      }
    })
  },
  // 校验登录状态
  checkStatus() {
    let that = this;
    this.globalData.openId = wx.getStorageSync('openId') || ''
    if(this.globalData.openId == ""){
      this.wxlogin()
    }else{
      this.globalData.checkToken = true
      // this.getToken()
    }
  },

page页面
//我是写在onShow里面的，为了更新数据
  onShow(){
    let that = this
    currentPage = 1,canPull = true;
    this.setData({
      listData: []
    })
    console.log('checkToken',app.globalData.checkToken)
    if(app.globalData.checkToken){
      that.SourceGetCount()
      that.LawRegulationsGetList()
    }else{
      app.callback = res => {
        that.SourceGetCount()
        that.LawRegulationsGetList()
      }
    }
  },
```