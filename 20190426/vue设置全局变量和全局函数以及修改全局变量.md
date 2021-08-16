Vue全局变量
创建一个js文件
```
export default {
	parma: "",
	setParma(parma){
		this.parma = parma
	}
}
```
在main.js中引入js
```
import parmaName from './fileName.js'
Vue.prototype.parma = parmaName
```
组件中
```
this.parmaName.parma
修改parma
this.parmaName.setParma(newParma)
```
Vue定义全局函数
第一种：
直接在main.js中写入函数
```
Vue.prototype.changeData = function(){
	console.log('公用方法')
}
```
组件中调用的方式
```
this.changeData();
```
第二种：
创建js文件
```
exports.install = function(Vue,options) {
	Vue.prototype.changeData = function(){
		console.log('公用方法')
	}
}
```
main.js中引用
```
import methodName form './fileName'
Vue.use(methodName)
```
组件中调用的方式
```
this.changeData();
```