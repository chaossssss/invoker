相当于store的计算属性
访问的形式
//在vuex中
store.getters.doneTodos
//在vue页面中
this.$store.getters.doneTodos

接受其他getter作为第二个参数
doneTodosCount:(state,getters) => {
	return getters.doneTodos.length
}


通过方法访问(每次都会调用，不会缓存)
getters:{
	getTodoById:(state) => (id) => {
		return state.todos.find(todo => todo.id == id)
	}
}
store.getters.getTodoById(2)

mapGetters将store中的getter映射到局部计算属性,写法类似于mapState
```
computed:{
	...mapGetters([
		'doneTodos',
		'doneTodosCount'
	])
}
```