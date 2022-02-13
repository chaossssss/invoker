
export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/hello2',
      name: 'HelloWorld2',
      component: HelloWorld2,
      meta: {
        keepAlive: false // 不需要缓存
      }
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }



  <template>
  <div id="app">
	<keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive" />
  </div>
  
 
</template>



$router.back()