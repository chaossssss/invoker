[JavaScript Alert 函数执行顺序问题](https://www.cnblogs.com/zhenbianshu/p/8686681.html)
由于页面渲染是 DOM 操作，会被 JavaScript 引擎放入事件队列；
alert() 是 window 的内置函数，被认为是同步 CPU代码；
JavaScript 引擎会优先执行同步代码，alert 弹窗先出现；
alert 有特殊的阻塞性质，JavaScript 引擎的执行被阻塞住；
点击 alert 的“确定”，JavaScript 没有了阻塞，执行完同步代码后，又读取事件队列里的 DOM 操作，页面渲染完成。