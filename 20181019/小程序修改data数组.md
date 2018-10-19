小程序修改data数组，还是比较麻烦的。至少我个人是这么觉得的。
```
var thisStatus = this.data.clist[i].status;
var _clist = this.data.clist;
_clist.forEach((item, index, arr) => {
var sItem = "clist[" + index + "].status";
if (index != i) {
  this.setData({
    [sItem]: false
  })
}
});
var clistStatus = "clist[" + i + "].status";
this.setData({
[clistStatus]: !thisStatus
})
```
先在外面定义成为字符串，再里面转成对象。
forEach的函数倒是可以好好学学，方便实用，一目了然。