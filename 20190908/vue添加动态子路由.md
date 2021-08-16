```
const asyncRouterMap = [{
  path: '/',
  name: 'Home',
  component: resolve => require(['@/views/Home'],resolve),
  meta: { auth: true },
  children:[{
    path:'HighInfo',
    name:'HighInfo',
    component:() => import('./views/HighInfo.vue')
  }]
}]
```
但是刚打开直接输入发现并没有用，要访问别的页面才行。