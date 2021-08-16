mapState是为了帮助生成计算属性,写在vue组件中
```
//直接mapState
computed:mapState({
	//原有的
	now(){
		return Date.now()
	}
	//vuex的
	count:state=>state.count//第一种写法,计算属性的名称与state的子节点相同可以直接传'count'
	countAlias:'count'//第二种写法,'count'等同于`state=>state.count`
})

//用...mapState
computed:{
	now(){ return ... }
	...mapState({
		count:state=>state.count
	})
}
```