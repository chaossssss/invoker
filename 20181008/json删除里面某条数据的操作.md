情景
===========
购物车删除多条商品信息

最开始是想着直接对原始数据操作，把匹配到的数据用```delete```方法直接删除。结果不尽人意，这个操作虽然是能把数据删掉，不过里面的内容变成了undefined，数据长度没有变化，不符合我想要的需求。又使用了```splice(index,1)```,不过这个方法的初衷应该就是针对单条数据的删除。
最终实现的思路是：拿到保留的数据信息，作为一个数组，然后覆盖原先的数据信息。

```
var arr = [];
var json = [
{
	name: 'a',
	age: 10,
	del: true
},
{
	name: 'b',
	age: 20,
	del: false
},{
	name: 'c',
	age: 30,
	del: false
}
]
console.log(json);
$(".del").on("click",function(){
	for(var i in json){
		if(json[i].del != true){
			arr.push(json[i]);

		}
	}
	json = arr;
	console.log(json);
})
```