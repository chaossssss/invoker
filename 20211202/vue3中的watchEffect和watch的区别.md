[vue3中的 watchEffect 和 watch 有什么区别以及如何使用](https://www.jianshu.com/p/ccf5899ccad9)


watchEffect
1.立即执行的，在页面加载时会主动执行一次
2.不需要传递需要侦听的内容，他可以自动感知代码依赖，只需要一个回调函数
3.不能获取之前的数据
4.返回值用来停止此监听

setup() {
  const { reactive, watchEffect } = vue
  const data = reactive({ name: 'lilei' })

  const stop = watchEffect(() => {
    console.log(data.name)

    setTimeout(() => {
      stop()
    },5000)
  })
}


watch:
1.具备一定的惰性，可以配置immediate
2.参数可拿到更改之前的值和更改之后的值
3.可以侦听多个数据的变化，用一个侦听器承载


const { reactive, watch, ref } = vue
const name = ref('yang')
watch(name,(newVal, oldVal) => {
  console.log(newVal)
},{immediate: true})

const data = reactive({name: 'lilei', age: 18})
watch(() => data.name, (newVal, oldVal) => {
  console.log(newVal)
}, {immediate: true})


一个侦听器
const data = reactive({name: 'lilei',age: 18})
watch([() => data.name, () => data.age],([newName, newAge], [oldName, oldAge]) => {
  console.log(newName, newAge)
  console.log(oldName, oldAge)
})


watchEffect 有副作用，在DOM更新前运行
用flush: 'post'，可以与DOM保持同步
<template>
  <div ref="root">This is a root element</div>
</template>
<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const root = ref(null)    // 获取dom
    watchEffect(() => {
      console.log(root.value)
    },{
      flush: 'post'
    })
    return {
      root
    }
  }
}
</sciprt>