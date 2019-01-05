给函数里面传参，全部参数存储在arguments里面。arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的Array
```
console.log(typeof arguments);    
// arguments 对象只能在函数内使用
function test(a){
    console.log(a,arguments);
    console.log(arguments[0],arguments[1]);
    console.log(typeof arguments[0]);
    var args = [].slice.call(arguments);
    // var args = Array.prototype.slice.call(arguments);

    // ES2015
    // const args = Array.from(arguments);
    // const args = [...arguments];
    console.log(args)
}
test(1);

```