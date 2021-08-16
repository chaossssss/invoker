x轴上显示两级
思路其实就是设置两个x轴
`data: ['','广告设施类','','','','占道类','','','','','','建筑垃圾','',''],
`设置空的字符串用来占位
难点在如何均衡的划分竖线，网上给的例子都是均等分，而我做的是不均等，
```
interval:function(index,value){
	console.log('index',index,'value',value)
	if(index == 0  || index == 3 || index == 9 || index == undefined){
		return true
	}
},
```
官方说法`第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 false。`
不过我试了试返回false刻度标签全都没了