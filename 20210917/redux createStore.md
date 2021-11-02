import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

发起action


<!-- 销毁 -->
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})