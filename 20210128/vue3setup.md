setup 处于beforeCreate、created
[vue3.0中setup使用(两种用法)](https://www.jb51.net/article/201199.htm)
```
<template>
 <div id="app">
  {{name}}
  <p>{{age}}</p>
  <button @click="plusOne()">+</button>
 </div>
</template>
  
<script>
import {ref} from 'vue'
export default {
 name:'app',
 data(){
  return {
   name:'xiaosan'
  }
 },
 setup(){
  const name =ref('小四')
  const age=ref(18)
  function plusOne(){
   age.value++ //想改变值或获取值 必须.value
  }
  return { //必须返回 模板中才能使用
   name,age,plusOne
  }
 }
}
</script>
```