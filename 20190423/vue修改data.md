1. 使用 Object.assign

鼠标移动上去的时候 代码可以改成如下:

this.items[index]._isHover = true;
this.items = Object.assign({}, this.items);


2. 使用Vue.set(object, key, value)方法将响应属性添加到嵌套的对象上。
this.$set(this.$data.items[index], '_isHover', true);