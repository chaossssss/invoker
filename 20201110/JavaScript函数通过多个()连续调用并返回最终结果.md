[JavaScript函数通过多个()连续调用并返回最终结果
](https://blog.csdn.net/z_maiijy/article/details/80000924)


另一种末尾有()
function func(a){
  if(typeof(a)=='undefined'){
     return this.result;
  }else{
    this.result = (typeof(this.result)=='undefined'?a:this.result*a);
    return func;
  }
}
var r = func(1)(2)(5)();