app.model({
  namespace: 'todos',
  effects: {
    *addRemote({ payload: todo },{ put, call }){
      yield call(addTodo, todo)
      yield put({ type: 'add', payload: todo })
    }
  }
})


put 触发action

call 用于调用异步逻辑，支持promise

select 用于从state里获取数据