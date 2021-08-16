搬砖达人先来抛个砖
做上拉加载的时候，用到了concat方法，arr1.concat(arr2),结果arr1的内容不是arr1+arr2的内容，而是原本arr1的内容重新赋值就行了，后来想起来以前查到过深浅复制的问题，就想专门写篇文章。

##深浅拷贝是啥
###浅拷贝
一个数组改变会影响到其他数组
```
var arr1 = [1,2,3,4]
var arr2 = arr1;
arr2[4] = 5;
console.log(arr1); //[1,2,3,4,5]
```
###深拷贝
一个数组改变不回影响其他数组
```
var arr1 = [1,2,3,4]
var arr2 = arr1.concat([]);
arr2[4] = 5;
console.log(arr1); //[1,2,3,4]
```
##深拷贝操作
concat,slice,数组的遍历操作,json字符串和对象转化
concat和slice在数组中内部为引用对象时，拷贝还是浅拷贝

数组的遍历操作
```
var arr1 = [1,2,3];
var arr2 = [];
function deepCopy(arry1, arry2){
　　var length = arry1.length;
　　for(var i = 0;i<length;i++){
　　　　arry2[i] = arry1[i];
　　}
}

deepCopy(arr1, arr2);
arr2[0] =5;
console.log(arr1);	//[1,2,3]
console.log(arr2);	//[5,2,3]
```

json字符串和对象转化
```
var arr7 = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var new_arr = JSON.parse(JSON.stringify(arr7))
arr7[1] = 3;
console.log(new_arr);	//['old', 1, true, ['old1', 'old2'], {old: 1}]
```

####浅拷贝通用方法
```
var shallowCopy = function (obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是一个对象
  var newObj = obj instanceof Array ? [] : {};
  // 遍历obj,并且判断是obj的属性才拷贝
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```

####深拷贝通用方法
```
var deepCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是一个对象
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    // 遍历obj,并且判断是obj的属性才拷贝
    if (obj.hasOwnProperty(key)) {
      // 判断属性值的类型，如果是对象递归调用深拷贝
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
```