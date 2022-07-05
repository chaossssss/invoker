[理解Vue中的Render渲染函数](https://www.cnblogs.com/tugenhua0707/p/7528621.html)
第二个参数
{
  class: {
    foo: true,
    bar: false,
  },
  style: {
    color: 'red',
    fontSize: '14px'
  },
  attrs: {
    id: 'foo'
  },
  // 组件props
  props: {
    myProp: 'bar'
  },
  domProps: {
    innerHTML: 'baz'
  },
  on: {
    click: this.clickHandler
  },
  nativeOn: {
    click: this.nativeClickHandler
  }
}