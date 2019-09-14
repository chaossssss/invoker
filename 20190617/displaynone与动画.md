css不能在display:none和display:block之间进行动画，并且也不能在height:0和height:auto之间进行动画。
由于display:none会引起页面的重绘事件，所以它是一个异步的延时事件，所以浏览器其实会先解析animate的代码，然后再执行display:none。

解决方法(通过位移来隐藏div)
```
@keyframes hideIndex{
	<!--具体细节自己可以调整-->
	0%{ opacity: 0; transform: translate(800px, 0) }
	100%{opacity: 1; transform: translate(0, 0) }
}
```