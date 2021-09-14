[react绑定事件的几种写法](https://www.cnblogs.com/superlizhao/p/11010746.html)

方法一：最麻烦
```
import React from 'react';
class App extends React.Component {
  handleClick(){
    alert('点击')
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    )
  }
}
```

方法二：构造函数里统一绑定，不常用
```
class App extends React.component {
  constructor(props);
  this.handleClick = this.handleClick.bind(this)
  handleClick(){
    alert('点击')
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
```

方法三：最常用
```
class App extends React.Component {
  constructor(props){
    super(props)
  }
  handleClick = () => {
    alert('点击')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
```

方法四：传参
```
class App extends React.compoent {
  constructor(props){
    super(props)
  }
  handleClick(e){
    alert(e)
  }
  render(){
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>click</button>
      </div>
    )
  }
}
```