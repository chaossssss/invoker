useEffect(() => {
    const timeId = setTimeout(() => console.log('我是定时器'), 1000)
    return () => clearTimeout(timeId)
 })


React 会在组件卸载的时候执行清除操作。effect 在每次渲染的时候都会执行。React 会在执行当前 effect 之前对上一个 effect 进行清除。


[React、Vue我全都要！React Hook 实现 Vue 的11个基本功能](https://juejin.cn/post/7037130413155811341)