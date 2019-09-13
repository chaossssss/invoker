[小程序代码片段](https://developers.weixin.qq.com/s/JkU4yJmc707s)
用于区分冒泡
bindtap和catchtap(阻止冒泡)
```
wxml
<view class="box3" data-id="box3" bindtap="tap3">
  <view class="box2" data-id="box2" bindtap="tap2">
    <view class="box1" data-id="box1" catchtap="tap1"></view>
  </view>
</view>


js
tap3:function(e){
	console.log(e.currentTarget.dataset.id)
},
tap2: function (e) {
	console.log(e.currentTarget.dataset.id)
},
tap1: function (e) {
	console.log(e.currentTarget.dataset.id)
}
```
点击box1只打印box1

currentTarget和target
把tap2修改成
```
tap2: function (e) {
	console.log(e.target.dataset.id)
},
```
点击box2会打印2次box2
如果你点击的是添加事件元素的子元素，就用e.currentTarget来获取父元素的值，用e.target来获取子元素的值，如果没有子元素，就在本元素就不用说了，e.target===e.currentTarget
event.target返回触发事件的元素
event.currentTarget返回绑定事件的元素
```
例子
<view class="box3" data-id="box3" bindtap="tap3">
  <view class="box2" data-id="box2">
    <view class="box1" data-id="box1" bindtap="tap1"></view>
  </view>
</view>
tap3:function(e){
console.log(e.target.dataset.id)
},
box2没有绑定事件，但是box3绑定事件，点击box2可以打印box2

```