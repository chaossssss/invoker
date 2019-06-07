网上整理的关于es6参数解构的文章
```
// 代码1：
function move({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]

// 代码2：
function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, undefined]
console.log(move({})); // [undefined, undefined]
console.log(move()); // [0, 0]
```

当没有传入参数（包括传入undefined）时，函数取参数（备用的）默认值。
不用解构赋值作为函数参数，函数参数默认值的写法：
```
function move(x = 0, y = 0) { console.log(`【${x}, ${y}】`);}
move(); // 【0,0】 x,y取默认值0
```

使用解构赋值作为函数参数，函数参数默认值的写法：
```
function move({x, y} = {x: 0, y: 0}) { console.log(`【${x}, ${y}】`);} 
move(); // 【0,0】 因为没有传入参数，所以move取默认参数{x: 0, y: 0}进行处理

注意：
	1、这里{x: 0, y: 0} ，默认值是一个对象，有实际的数值。
	2、这里的【函数参数默认值】是 x = 0, y = 0。
	3、当函数没有收到参数，则取默认值，然后再将其解构。解构的模式是{x, y}。
```
--------------------- 
作者：尢尢12344 
来源：CSDN 
原文：https://blog.csdn.net/qq_34320300/article/details/82843970 
版权声明：本文为博主原创文章，转载请附上博文链接！