function test(name){  //声明式写法

}

let test2 = function(name){   //赋值式写法

}

箭头函数只能用赋值式写法


const obj = {
  name: 'Jerry',
  greet: function(){
    console.log(this.name)
  }
}

obj.greet()
obj.greet.call(obj)

匿名函数中this指向window，如果是严格模式则指向undefine

箭头函数无法用 call 修改 this

箭头函数this与外层一致