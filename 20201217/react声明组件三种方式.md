1.函数式定义 无状态组件
import React from 'react';
const Button = ({
  day,
  increment
}) => {
  return (
    <div>
      <button onClick={increment}>Today is {day}</button>
    </div>
  )
}

Button.propTypes = {
  day: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
}

2.es5原生方式 React.createClass
var React = require("react");
var Greeting = React.createClass({
  
  propTypes: {
    name: React.PropTypes.string //属性校验
  },

  getDefaultProps: function() {
    return {
      name: 'Mary' //默认属性值
    };
  },
  
  getInitialState: function() {
    return {count: this.props.initialCount}; //初始化state
  },
  
  handleClick: function() {
    //用户点击事件的处理函数
  },

  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
module.exports = Greeting;

3.es6形式 extends React.Component
import React from 'react';
class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.handleClick = this.handleClick.bind(this);
  }
  
  //static defaultProps = {
  //  name: 'Mary'  //定义defaultprops的另一种方式
  //}
  
  //static propTypes = {
    //name: React.PropTypes.string
  //}
  
  handleClick() {
    //点击事件的处理函数
  }
  
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string
};

Greeting.defaultProps = {
  name: 'Mary'
};
export default Greating;


4.PureComponet 新看到的 不用写shouldComponentUpdate
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}