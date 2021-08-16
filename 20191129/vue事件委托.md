```
<body>
  <div id="app">
    <my-component></my-component>
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let component = {
      template: `
        <ul @click="handleClick">
          <li v-for="(item, index) in data" :data-index="index">
            {{ item.text }}
          </li>
        </ul>
      `,
      data() {
        return {
          data: [
            {
              id: 0,
              text: '0',
            },
            {
              id: 1,
              text: '1',
            },
            {
              id: 2,
              text: '2',
            }
          ]
        }
      },
      methods: {
        handleClick(e) {
          if (e.target.nodeName.toLowerCase() === 'li') {
            const index = parseInt(e.target.dataset.index)
            // 获得引索后，只需要修改data数据就能改变UI了
            this.doSomething(index)
          }
        },
        doSomething(index) {
          // do what you want
          alert(index)
        }
      }
    }

    new Vue({
      el: '#app',
      components: {
        'my-component': component
      }
    })
  </script>
</body>
```