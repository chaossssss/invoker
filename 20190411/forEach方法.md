```
	function foo(el){
		console.log(el,this.id)
	}
	var obj = {
		id: "awesome"
	}
	var myArray = [1,2,3]
	myArray.forEach(foo,obj);
```
MDN上相关解释
`arr.forEach(callback[, thisArg]);`
参数
```
callback
为数组中每个元素执行的函数，该函数接收三个参数：
currentValue
数组中正在处理的当前元素。
index可选
数组中正在处理的当前元素的索引。
array可选
forEach() 方法正在操作的数组。
thisArg可选
可选参数。当执行回调函数时用作 this 的值(参考对象)。
```