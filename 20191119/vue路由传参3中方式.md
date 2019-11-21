父组件中：
```
<li v-for="article in articles" @click="getDescribe(article.id)">
```
methods：
方案一:
```
getDescribe(id) {
//直接调用$router.push 实现携带参数的跳转
	this.$router.push({
    	path: `/describe/${id}`,
})


路由配置:
{
  path: '/describe/:id',
  name: 'Describe',
  component: Describe
}

this.$route.params.id
```

方案二:
```
this.$router.push({
	name: 'Describe',
	params: {
		id: id
	}
})

路由配置:
{
	path: '/describe',
	name: 'Describe',
	component: Describe
}

this.$route.params.id
```

方案三:
```
this.$router.push({
	path: '/describe',
	query: {
		id: id
	}
})

路由配置:
{
	path: '/describe',
	name: 'Describe',
	component: Describe
}

this.$route.query.id
```