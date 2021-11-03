import { combineReducers } from 'redux'
const todoApp = combineReducers({
  visibility,
  todos
})

等价于

export default function todoApp(state = {}, action){
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

再简化
import { combineReducers } from 'redux'
import * as reducers from './reducers'
const todoApp = combineReducers(reducers)