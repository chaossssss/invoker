拦截请求和响应，进行相应的处理
```
//响应拦截器
axios.intercrptors.response.use(
	response => {
		if(response.data.code){

		}
		return response
	},
	error => {
		return Promise.reject(error.response.status)
	}
)

//请求拦截器
axios.interceptors.request.use(config => {
	// 在发送请求之前做些什么
	let pathname = location.pathname;
	if(localStorage.getItem('token')){
		if(pathname != '/' &&  pathname != '/login'){
			config.headers.common['token'] = localStorage.getItem('token');
		}
	}
	return config;
}, error => {
	// 对请求错误做些什么
	return Promise.reject(error);
});
```