var SayHello = createReactClass({
  getInitalState: function(){
    return { message: 'hello world!'}
  },
  handleClick: function(){
    alert(this.state.message)
  },
  render: function(){
    return (
      <button onClick={this.handleClick}>Say Hello</button>
    )
  }
})