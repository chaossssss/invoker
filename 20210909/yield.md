yield 关键字用来暂停和继续一个生成器函数

function* ge(){
  yield '1';
  yield '2';
  yield '3';
  return '4';
}
var a = ge();
a.next()  // { value: '1', done: false }
a.next()  // { value: '2', done: false }
a.next()  // { value: '3', done: false }
a.next()  // { value: '4', done: true }



function* ge(){
  yield '1';
  yield '2';
  yield '3';
  return '4';
}
for(let v of ge()){
  alert(v)  // 1 2 3 4
}



异步任务的封装
const person = sex => {
  return new Promise((resolve,reject) => {
    window.setTimeout(() => {
      const data = {
        sex,
        name: 'keith',
        height: 180
      }
      resolve(data)
    },1000)
  })
}

function *gen(){
  const data = yield person('boy')
  console.log(data)
}
const g = gen()
const next1 = g.next()
next1.Value.then(data => {
  g.next(data)
})