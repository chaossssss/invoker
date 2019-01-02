var promise1 = new Promise(function(resolve,reject){
	setTimeout(function(){
	resolve('foo')
	},300)
})
promise1.then(function(value){
	console.log(value)
})

pending:初始状态
fulfilled:操作成功完成
rejected:操作失败


then方法可以接受两个参数，一个对应resolve的回调，另一个对应reject的回调
catch方法处理失败情况，指定reject的回调
all方法提供了并行执行异步能力，在所有异步操作执行完后执行回调，把所有异步操作的结果放进一个数组中传给then，以最慢的为准
```

function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}


Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});
```

race方法以快的为准执行回调，先出现runAsync1()的内容