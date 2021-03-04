使用方法
```
import mitt from 'mitt'

const bus = {}

const emitter = mitt()

bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus
```

main.js

```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
import './assets/reset.css'
import installElementPlus from './plugins/element'
import Bus from './bus.js'/// mitt 总线程引入
const app = createApp(App)
app.config.globalProperties.bus = Bus;
app.use(store).use(router).mount('#app')
app.echarts = echarts
installElementPlus(app)
```