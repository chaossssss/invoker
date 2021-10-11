```
class Point{
  constructor() {

  }
  toString(){

  }
  toValue(){

  }
}

<!-- 等同于 -->
Point.prototype = {
  constructor(){},
  toString(){},
  toValue(){}
}


let person = new class {
  constructor(name){
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}('张三')
person.sayName()


class Foo {
  constructor(...args){
    this.args = args
  }
  * [Symbol.iterator](){
    for(let arg of this.args){
      yield arg
    }
  }
}
for(let x of new Foo('hello', 'world')){
  console.log(x)
}

class Longer{
  printName(name = 'there'){
    this.print(`hello ${name}`)
  }

  print(text){
    console.log(text)
  }
}
const Logger = new Logger()
const { printName } = logger
printName()

静态方法
表示不会被实例继承，而是直接通过类来调用

class Foo {
  static classMethod() {
    return 'hello'
  }
}
Foo.classMethod() //'hello'

var foo = new Foo()
foo.classMethod() //error

// 静态方法与非静态方法重名
class Foo {
  static bar(){
    this.baz()
  }
  static baz(){
    console.log('hello')
  }
  baz(){
    console.log('world')
  }
}
Foo.bar() //hello

// 继承
class Foo {
  static classMethod(){
    return 'hello'
  }
}
class Bar extends Foo{}
Bar.classMethod()


class Foo{
  static classMethod(){
    return 'hello'
  }
}
class Bar extends Foo {
  static classMethod(){
    return super.classMethod() + ',too'
  }
}
Bar.classMethod()


方法一
class IncreasingCounter{
  constructor(){
    this._count = 0
  }
  get Value(){
    consoel.log('Getting the current value!')
    return this._count
  }
  increment(){
    this._count++
  }
}
方法二
class IncreasingCounter {
  _count = 0;
  get value(){
    console.log('Getting the current value!')
    return this._count
  }
  increment(){
    this._count++
  }
}

// 静态属性
class MyClass {
  static myStaticProp = 42
  constructor(){
    console.log(MyClass.myStaticProp)
  }
}


class Foo {
  static prop = 1
}



私有属性 # 只能在内部调用
class IncreasingCounter {
  #count = 0
  get value(){
    console.log('Getting the current value!')
    return this.#count
  }
  increment(){
    this.#count++
  }
}



in 运算符 判断私有属性
class A {
  use(obj){
    if(#foo in obj){
      // 存在#foo
    }else{
      // 不存在#foo
    }
  }
}

class A {
  #foo = 0
  m(){
    console.log(#foo in this)
    console.log(#bar in this)
  }
}


new.target属性
用在构造函数中，返回new命令作用于那个构造函数中。如果构造函数不是通过new命令活Reflect.construct()调用的，new.target会返回undefined

function Person(name){
  if(new.target !=== undefined){
    this.name = name
  }else{
    throw new Error("必须使用 new 命令生成实例")
  }
}

function Person(name){
  if(new.target === Person){
    this.name = name
  }else{
    throw new Error("必须使用 new 命令生成实例")
  }
}

var person = new Person("张三")
var notAPerson = Person.call(person,"张三")


```