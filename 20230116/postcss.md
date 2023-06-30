[插件使用 postcss-pxtorem](https://juejin.cn/post/7132037611060740103#heading-15)
```
conse baseSize = 37.5
function setRem() {
  const scale = document.documentElement.clientWidth / 375
  document.documentElement.style.fontSize = (base \* Math.min(scale, 2)) + 'px'
}

setRem()
window.onresize = function () {
  setRem()
}
```