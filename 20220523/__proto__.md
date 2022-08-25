[JS中的原型和原型链（图解）](https://blog.csdn.net/qq_36996271/article/details/82527256)
[JS：原型和原型链](https://blog.csdn.net/elevenhope/article/details/122882582)
function Foo(name,age) {
  this.name = name;
  thia.age = age;
}
Object.prototype.toString = function() {
  console.log("name",name,"age",age)
}
var fn = new Foo("小明",20)
fn.toString();
console.log(fn.toString === Foo.prtotype.__proto__.toString)
console.log(fn.__proto__ === Foo.prototype)
console.log(Foo.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)




class Person {
  constructor(name) {
    this.name = name
  }
  drink() {
    console.log('喝水')
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  teach() {
    console.log(`${this.name},${this.subject}`)
  }
}

const teacher = new Teacher('aa','bb')

