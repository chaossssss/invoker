```
<div id="app">
  <input v-on:[event] = "doSomething">
  <button v-on:click="event = 'focus'">change</button>
</div>
new Vue({
  el: '#app',
  data() {
    return {
      event: 'input'
    }
  },
  methods: {
    doSomething () {
      console.log('sss')
    }
  },
})

```