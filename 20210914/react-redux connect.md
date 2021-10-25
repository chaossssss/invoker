connet 用于从UI组件生成容器组件
import { connect } from 'react-redux'
export default connect(mapStateToProps,mapDispatchToProps)(AppUI)

import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Components {
  render() {
    const {value, onIncreaseClick, onReduceClick} = this.props
    return (
      <div>
        <button style={{width: 40, height: 40}} onClick={onIncreaseClick}>+</button>
        <text style={{padding: 40}}>{value}</text>
        <button style={{widht: 40, height: 40}} onClick={onReduceClick}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncreaseClick: () => dispatch({type: 'increase'}),
    onReduceClick: () => dispatch({type: 'reduce})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)


import {Provider} from "react-redux"
<Provider store={store}>
  <App />
</Provider>
App的所有子组件都可以拿到state