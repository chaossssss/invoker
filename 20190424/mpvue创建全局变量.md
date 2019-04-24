第一种方式：
将小程序的全局变量挂载在vue的原型上
```
//main.js
const app = new Vue(App)
app.$mount()
Vue.prototype.globalData = getApp().globalData
Vue.prototype.globalData.userInfo = 4444
//页面引用
console.log(this.globalData.userInfo)
```
第二种方式：
创建一个全局模块，这么做其实就无所谓是不是小程序了