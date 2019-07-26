vue数组直接赋值的方式是无法更新页面的
data:[{title:"a",id:"1"},{title:"b",id:"2"}]
var a = [{title:"c",id:"3"},{title:"d",id:"4"}]
我个人是将`this.data.splice(0,this.data.length)`这样清空，然后for循环push