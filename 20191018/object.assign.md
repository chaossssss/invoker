用于对象的合并
1、以对象为参数的合并
1）Object.assign方法的第一个参数是目标对象，后面的参数都是源对象
　　const target = {a: 1};
　　const source1 = {b: 2};
　　const source2 = {c: 3};
　　Object.assign(target, source1, source2);
　　console.log(target)// {a:1, b:2, c:3}
2）如果只有一个参数，会直接返回该参数
　　const obj = {a: 1};
　　console.log(Object.is(Object.assign(obj), obj))//true
3）如果该参数不是对象会先转换成对象
　　console.log(Object.assign(2))
　　console.log(typeof Object.assign(2))//object
4)undefined和null无法转成对象，所以如果他们作为参数会报错
　　console.log(Object.assign(undefined))//报错
　　console.log(Object.assign(null))//报错
2.如果非对象参数出现在原对象的位置 处理规则如下
1）如果undefined和null不在首参数，就不会报错
　　let obj1 = {a: 1};
　　console.log(Object.is(Object.assign(obj1, undefined), obj1));
　　console.log(Object.assign(obj1, null) === obj1);
2)其他类型的值不在首参数也不会报错。但是字符串会以数组的形式 拷贝入对象，其他值不会产生其他效果
　　const v1 = 'abc';
　　const v2 = true;
　　const v3 = 10;
　　const v4 = {'Symbol':0};
　　const obj2 = Object.assign({}, v1, v2, v3,v4);
　　console.log(obj2);
3)Object.assign拷贝的属性是有限制的，只拷贝原对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性
　　Object.assign({b: 'c'},
　　Object.defineProperty({}, 'invisible', {
　　　　enumerable: false,
　　　　value: 'hello'
　　　　})
　　)
　　// { b: 'c' }
4)属性名为Symbol值得属性，也会被Object.assign拷贝
　　Object.assign({a: 'b'}, {[Symbol('c')]: 'd'})
　　console.log(Object.assign({a: 'b'}, {[Symbol('c')]: 'd'}))
3注意点：
1）浅拷贝 如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
　　const obj3 = {a: {b:1}};
　　const obj4 = Object.assign({}, obj3);
　　obj3.a.b = 2;
　　console.log(obj4.a.b)
2)同名属性的替换 一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加
　　const target1 = {a: 8};
　　const source3 = {a: 9};
　　console.log(Object.assign(target1, source3))
3)数组处理 把数组视为对象
　　var obj5 = Object.assign([1, 2, 3], [4, 5]);
　　console.log(obj5);
4) 取值函数的处理 如果要复制的值是取值函数，那么求值后再复制
　　const source4 = {
　　　　get foo() {return 1}
　　}
　　const target4 = {};
　　console.log(Object.assign(target4, source4));
4常见的用途
1）为对象添加属性
　　class Point {
　　　　constructor (x, y) {
　　　　　　Object.assign(this, {x, y})
　　　　}
　　}
2) 为对象添加方法
　　Object.assign(SomeClass.prototype, {
　　　　someMethod(arg1, arg2) {},
　　　　anotherMethod() {}
　　});
3)克隆对象
　　function clone(origin) {
　　　　return Object.assign({}, origin);
　　}
4)合并多个对象
　　const merge = (target, ...sources) => Object.assign(target, ...sources);
5)为属性指定默认值
　　const DEFAULTS = {
　　　　logLevel: 0,
　　　　outputFormat: 'html'
　　};

　　function processContent(options) {
　　　　options = Object.assign({}, DEFAULTS, options);
　　　　console.log(options);
　　　　// ...
　　}