1、全局的钩子
beforeEach（to，from，next）
页面加载之前
页面跳转之前权限认证，访问拦截
afterEach（to，from，next）
页面加载之后


2、组建内的导航钩子
beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave,直接在路由组件内部进行定义的

beforeRouteEnter(to, from, next)
在渲染该组件的对应路由被 confirm 前调用,
因为当钩子执行前，组件实例还没被创建,不能获取组件实例‘this’
beforeRouteUpdate (to, from, next)
在当前路由改变，但是该组件被复用时调用，即原路由带有动态参数，例如：／detail/:id,id值改变，即路由改变，但原本组件被复用；
访问组件实例 this
beforeRouteLeave (to, from, next)
导航离开该组件的对应路由时调用
可以访问组件实例 this
用途：清除当前组件中的定时器，避免占用内存；当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转；保存相关内容到Vuex中或Session中


3、路由内的导航钩子
const router = new VueRouter({
routes: [
{
path: '/detail',
component: detail,
beforeEnter: (to, from, next) => {
// ...
}
}
]
