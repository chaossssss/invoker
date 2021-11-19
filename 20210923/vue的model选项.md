Vue.component('custom-input',{
  template: `<input :value='value' @input='update($event.target.value)' type='text'></input>`,
  props: ['value'],
  methods: {
    updateVal(val){
      this.$emit('input', val)
    }
  }
})

var app = new Vue({
  el: '#app',
  data(){
    price: ''
  },
  methods: {
    onInput(val){
      this.price = val
    }
  }
})
<div id="app">
  <price-input :value="price" @input="onInput"></price-input>
</div>




//  子组件
Vue.compoent('my-input',{
  model: {
    prop: 'uname',
    event: 'changeXXX'
  },
  props: {
    uname: {
      type: String,
      default: 'tom'
    }
  },
  methods: {
    updateVal(val){
      this.$emit("changeXXX",val)
    }
  }
})
<template>
  <input type="text" :value="uname" @input="update($event.target.value)">
</template>


//  父组件
<my-input v-model="name" value="some value"></my-input>
等价于
<my-input :uname="name" @changeXXX='val => {foo = val}' value='some value'></my-input>