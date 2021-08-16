记录以下提交方式(载荷payload是个对象的情况)
mutations:{
	increment(state,payload){
		state.count += payload.amount
	}
}
// 一种写法
store.commit('increment',{
	amount: 10
})
// 对象风格提交方式
store.commit({
	type: 'increment',
	amount: 10
})
Mutation添加新属性
Vue.set(obj,'newProp',123)
以新对象替换老对象
state.obj = {...state.obj,newProp:123}

使用常量替代Mutation事件类型
//mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'

//store.js
mutations:{
	[SOME_MUTATION](state){
	...
	}
}


组件中提交Mutation
```
export default {
  // 在methods中声明，像普通方法一样调用
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```