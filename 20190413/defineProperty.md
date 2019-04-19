Object.defineProperty(obj,prop,desc)

obj: 目标对象
prop：需要定义的属性或方法的名字
desc：目标属性所拥有的特性，分为数据描述符和存取描述符
desc取值
configurable:当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable : 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。意思就是能否在for...in循环出来或在Object.keys中列举出来
数据修饰符
value:该属性对应的值。
writable:当且仅当该属性的writable为true时，value才能被赋值运算符改变。
存取描述符
**不能同时设置(get、set)和(writable和value)**
网上看到的一个例子
```
var a= {}
Object.defineProperty(a,"b",{
  set:function(newValue){
    console.log("你要赋值给我,我的新值是",newValue)
    },
  get:function(){
    console.log("你取我的值")
    return 2 //注意这里，我硬编码返回2
   }
})
a.b = 1 //打印 你要赋值给我,我的新值是1
console.log(a.b)    //打印 你取我的值
                    //打印 2    注意这里，和我的硬编码相同的
```