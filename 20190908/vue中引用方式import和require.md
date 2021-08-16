require: 运行时调用，理论上可以运用在代码的任何地方，
import：编译时调用，必须放在文件开头


如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长。
当你用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js。
懒加载：component: resolve => require(['@/view/index.vue'], resolve)