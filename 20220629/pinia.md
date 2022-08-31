actions
组件中的方法
使用actions属性直接定义



组件中使用
const store = useUsers()
store.registerUser()


组件中修改state
store.$patch({
  xxx: '值'
})