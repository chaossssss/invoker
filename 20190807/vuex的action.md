actions的用法
mutations:{
	increment(state){
		state.count++
	}	
},
actions:{
	increment(context){
		context.commit('increment')//提交一个mutation，也可以是`context.state`和`context.getters`获取对应的值
	}
}

//使用参数结构的写法
actions:{
	increment({commit}){
		commit('increment')
	}
}

在store和vue组件中调用，跟mutation差不多