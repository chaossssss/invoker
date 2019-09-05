1.引入vuex 在其中存储用户状态
```
import Vue from ‘vue‘
import Vuex from ‘vuex‘
 
Vue.use(Vuex);
var state = {
  isLogin:0,     //初始时候给一个 isLogin=0 表示用户未登录
};
 
const mutations = {
  changeLogin(state,data){
    state.isLogin = data;
  }
 
};
```
2.在用户登录时改变登录状态
```
this.$store.commit(‘changeLogin‘,‘1‘)   
//登录后改变登录状态 isLogin = 1 ；
```
3.路由入口加上导航钩子
```
{ 
	path: ‘/admin‘, 
	component: Admin,
	meta:{auth:true} // 设置当前路由需要校验  不需要校验的路由就不用写了
}
```
4.路由跳转并校验
```
router.beforeEach((to,from,next) => {    
	if(to.matched.some( m => m.meta.auth)){     
	// 对路由进行验证     
		if(store.state.isLogin=='100') { // 已经登陆       
			next()   // 正常跳转到你设置好的页面     
		}else{
			// 未登录则跳转到登陆界面，query:{Rurl:to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
			next({path:'/login',query:{ Rurl: to.fullPath} })
		}
　　}else{ 
	　　next() 
	} 
})
```