在使用axios时，注意到配置选项中包含params和data两者，以为他们是相同的，实则不然。 

因为params是添加到url的请求字符串中的，用于get请求。 

而data是添加到请求体（body）中的， 用于post请求。

比如对于下面的get请求：
axios({
method: "get",
url: "http://www.tuling123.com/openapi/api?key=20ff1803ff65429b809a310653c9daac",
params: {
info: "西安天气"
},
})
如果我们将params修改为data，显然是不能请求成功的，因为get请求中不存在data这个选项。
1、HTTP请求过程中，get请求：表单参数以name=value&name1=value1的形式附到url的后面；

2、post请求：表单参数是在请求体中，也是name=value&name1=value1的形式在请求体中。
POST表单请求提交时，使用的Content-Type是application/x-www-form-urlencoded，而使用原生AJAX的POST请求如果不指定请求头RequestHeader，默认使用的Content-Type是text/plain;charset=UTF-8。
在html中form的Content-type默认值：Content-type：application/x-www-form-urlencoded
如果使用ajax请求，在请求头中出现 request payload导致参数的方式改变了 ,那么解决办法就是：
headers: {'Content-Type':'application/x-www-form-urlencoded'}
或者使用ajax设置：
$.ajaxSetup({contentType: 'application/x-www-form-urlencoded'});
这样，问题就可以解决。