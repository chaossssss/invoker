解决：router文件夹下面的index.js中加上下面几句代码，搞定

```
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```