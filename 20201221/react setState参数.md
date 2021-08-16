[react中的setState的使用和深入理解](https://www.cnblogs.com/katydids/p/10014111.html)
1.
ClickChangeState(){
  this.setState({
    isActive: true
  },()=>{
    console.log(this.state.isActive)
  })
}

2.
async ClickChangeState(){
  await this.setState({
    isActive: true
  })
  console.log(this.state.isActive)
}