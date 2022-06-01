vue组件独享守卫钩子函数参数详解（beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave）


beforeRouteEnter(to, from, next) {
  next(vm => {
    console.log(vm) // vm相当于this
  })
}

beforeRouteUpdate(to, from, next) {
  // 在当前路由改变，带式该组件被复用时调用
  // 比如 /good/1 和 /good/2
  // 这时候有this
}

beforeRouteLeave(to, from, next) {
  // 离开该组件的对应路由调用
  // 这时候有this
}