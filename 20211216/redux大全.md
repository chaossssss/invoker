state 存储数据

actions 相当于记录方法

reducer 把actions 和 state 连接起来

combineReducers 把多个 reducer 函数合并成为一个 reducer 函数

connect
export default connect(mapStateToProps, mapDispatchToProps)(AppUI);

mapStateToProps(state, ownProps)
mapStateToProps：更新props————>作为输入源。返回一个对象，key为UI界面对应的名称，value为state处理的结果
mapStateToProps用于建立组件跟store的state的映射关系
state变化，会调用
ownProps代表组件本身的props，props发生变化，mapStateToProps也会调用

mapDispatchToProps
mapDispatchToProps：更新action————>作为输出源。触发action更新reducer，进而更新state，从而驱动参数1变化，引起UI数据的变化

建立组件跟store.dispatch的映射关系
传入dispath,ownProps,定义UI组件分发action，实际要调用dispatch

container 
负责管理数据和业务逻辑，不负责UI的呈现，有业务逻辑，并且可以使用Redux提供的API
描述如何运行
直接使用redux
监听rudex state
向 redux 派发 actions
由 react dedux 生成

component
只负责UI呈现，不带有任何业务逻辑，没有状态state值的使用，所有的参数是通过this.props获取
描述如何展示
不直接使用 redux
数据来源 props
从 props 调用回调函数
手动

Provider 
包裹Provider 让所有的container都能访问store

createStore

subscribe注册监听器

bindActionCreators
把多个actionCreator 变成会去执行dispatch的函数，并且返回这个对象

redux middleware 
action被发起之后，到达 reducer 之前的扩展点
就是在dispatch前后做一些额外的事情的一个函数
const doNothingMiddleware = (dispath, getState) => next => action => next(action)




actionTypes
const ADD_TODO = 'ADD_TODO'

{
  type: ADD_TODO,
  text: ''
}



redux-thunk  实现异步性
将 `thunk` 看作 store 的 `dispatch()` 方法的封装器


redux-logger 打印日志的中间件


createStore 
createStore(reducer,[initialState],enhancer)



异步

dispatch({type:"LOAD_ACTION_START"})
dispatch({type:"LOAD_ACTION_SUCCESS"})
dispatch({type:"LOAD_ACTION_ERROR"})

class DemoView extends Component {
  getHttpData=()=>{ //获取HTTP请求——核心代码
    Store.dispatch(LOAD_ACTION_FUNS(LOAD_ACTION_START));
    setTimeout(()=>{ //模拟http请求
      const res={ //模拟服务器返回的数据
        flag:"success",
        msg:"",
        datas:[
          {
            title:"请求成功"
          },{
            title:"请求成功"
          },{
            title:"请求成功"
          }
        ]
      }
      if(res["flag"] == "success"){ //请求成功
        Store.dispatch(LOAD_ACTION_FUNS(LOAD_ACTION_SUCCESS,{datas:res['datas']}));
      }else{ //请求失败
        Store.dispatch(LOAD_ACTION_FUNS(LOAD_ACTION_SUCCESS,{msg:res['msg']}));
      }
    },3000);
  }

  render(){
    //忽略
    return null;
  }
}