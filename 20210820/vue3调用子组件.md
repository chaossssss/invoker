
方法一
```
// 父组件
<template>
  <div>
    <h3>TemplateRefOne</h3>

    <!-- 4. 点击按钮展示子组件的 count 值 -->
    <button @click="showNumber">获取TemplateRefTwo中的count值</button>

    <hr />
    <!-- 3. 为组件添加 ref 引用 -->
    <TemplateRefTwo ref="comRef" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import TemplateRefTwo from './TemplateRefTwo'

export default {
  setup() {
    // 1. 创建一个组件的 ref 引用
    const comRef = ref(null)

    // 5. 展示子组件中 count 的值
    const showNumber = () => {
      console.log(comRef.value.count)
    }

    // 2. 把创建的引用 return 出去
    return {
      comRef,
      showNumber
    }
  },
  components: {
    TemplateRefTwo
  }
}
</script>
```

```
// 子组件
<template>
  <div>
    <h5>TemplateRefTwo --- {{count}}</h5>
    <!-- 3. 点击按钮，让 count 值自增 +1 -->
    <button @click="count+=1">+1</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    // 1. 定义响应式的数据
    const count = ref(0)

    // 2. 把响应式数据 return 给 Template 使用
    return {
      count
    }
  }
}
</script>
```

方法二
```
//  父组件
<Table ref="eleTable" @handle="handleFun"></Table>
import {  ref  } from 'vue'
setup() { 
   //ref方法
    const eleTable = ref()  //eleTable是页面ref后面对应的名字
    const clickSon = () => {
      eleTable.value.changeShowText() //调用子组件的方法
      let arr = eleTable.value.tableData //获取子组件 setup 里面定义的变量
    }
}

```

```
//  子组件
<el-button type="success" style="margin:10px 0">{{conts}}</el-button>
import {  ref  } from 'vue'

setup(){
    const tableData = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }]
 
 
    const conts = ref("我是子组件"); //我是子组件是默认展示的数据
    const changeShowText = () =>{
      conts.value = "22222222222";
    }
 
    return {
      //数据
      tableData,
      conts,
      //函数方法
      changeShowText
 
    }
}
```


ts
```
// 父组件
<template>
  <div>sonRef</div>
  <button @click="sendValue">send</button>
  // 这里ref接受的字符串，要setup返回的ref类型的变量同名
  <Son ref="sonRef" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Son from '@/components/Son.vue'

export default defineComponent({
  name: 'Demo',
  components: {
    Son
  },
  setup() {
    // 如果ref初始值是一个空，可以用于接受一个实例
    // vue3中获取实例的方式和vue2略有不同
    const sonRef = ref()

    const sendValue = () => {
      // 可以拿到son组件实例，并调用其setup返回的所有信息
      console.log(sonRef.value)
      
      // 通过调用son组件实例的方法，向其传递数据
      sonRef.value.acceptValue('123456')
    }

    return {
      sonRef,
      sendValue
    }
  }
})
</script>
```

```
// 子组件
<template>
  // 渲染从父级接受到的值
  <div>Son: {{ valueRef }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Son',
  setup() {
    const valueRef = ref('')
    
    // 该函数可以接受父级传递一个参数，并修改valueRef的值
    const acceptValue = (value: string) => (valueRef.value = value)

    return {
      acceptValue,
      valueRef
    }
  }
})
</script>
```