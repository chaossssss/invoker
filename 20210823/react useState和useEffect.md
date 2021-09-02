## useState


函数组件没有this
使用useState来声明变量
```
function Example(){
  const [count, setCount] = useState(0)
}
```

## useEffect
useEffect看作 componentDidMount , componentDidUpdate 和 componentWillUnmount 这三个函数组合

```
class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate(){
    document.title = `You clicked ${this.state.count} times`;
  }
  render(){
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={()=>this.setState({count: this.state.count + 1})}>
          Click Me
        </button>
      </div>
    )
  }
}
```
转成hook写法

```
import React, { useState, useEffect } from 'react';

function Example(){
  const [count, setCount] = useState(0)
  useEffect(() => {
    doucment.title = `You clicked ${count} times`;
  })
  return  (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
    </div>
  )
}
```


定时器
```
class Example extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    this.id = setInterval(()=>{
      this.setState({
        count: this.state.count + 1
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.id)
  }
  render(){
    return <h1>{this.state.count}</h1>
  }
}
```
转换成hook
```
function Example(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(c => c + 1)
    },1000);
    return () => clearInterval(id)
  },[]);  // [] 代表只执行一次， [count] 代表 count 更改时更新
  return <h1>{count}</h1>
}
```

