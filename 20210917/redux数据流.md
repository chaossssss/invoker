let previousState = {
  visibleTodoFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Read the docs',
      complete: false
    }
  ]
}
let action = {
  type: 'ADD_TODO',
  text: 'Understand the flow'
}

let nextState = todoApp(previousState, action)