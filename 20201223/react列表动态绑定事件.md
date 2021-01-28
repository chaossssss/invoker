    let todoItems = this.state.todoList.map((item,index)=>{
      return (
        <div key={index} onClick={() => {this.removeAppointTodo(index)}}>{item.text}</div>
      )
    })