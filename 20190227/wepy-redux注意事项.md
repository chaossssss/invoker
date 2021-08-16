使用dispatch的时候需要在app.wpy中添加wepy.$store = store
官方实例中没有加，坑了很久

赋值过程
reducers中
export default handleActions({
  [STORE_ADDRESS] (state,action) {
    console.log('reducers:',state,action);
    return {
      ...state,
      addr:action.payload.addr
    }
  },
}, {
  addr:'浙江'
})


组件内
@connect({
  stateAddr (state) {
    return state.counter.addr
  }
}, {
  storeAddr: STORE_ADDRESS
})

方法
chooseAddr(){
  wepy.$store.dispatch({ type : 'STORE_ADDRESS' , payload : {
    addr : '北京' 
  }})
},