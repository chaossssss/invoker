[script setup 实验性 vue 语法](https://blog.csdn.net/wu_xianqiang/article/details/109892035)


<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const inc = () => count.value++

    return {
      count,
      inc,
    }
  },
}
</script>



setup不需要return 导出
<script setup>
  import { ref } from 'vue'

  export const count = ref(0)
  export const inc = () => count.value++
</script>