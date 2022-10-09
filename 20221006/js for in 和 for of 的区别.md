for in 对象属性


var obj1 = {
            name : 'abc',
            age : 18,
            sex : '男'
        };
        var obj2 = {};

        for(prop in obj1){
            obj2[prop] = obj1[prop];
        }

        console.log(obj2);
        //输出{name: "abc", age: 18, sex: "男"}
        
        obj2[age] = 18; //报错
        obj2[age];	//报错
		obj2.age = 18; //{age: 18}
		
		obj2[name] = 'abc';	//{'': 'abc'}
		obj2[name]; 	//'abc'
		obj2.name;  //'abc'



        为什么在for in循环中不报错而在外面写却会报错。
这是因为访问对象的属性有两种方法

obj.属性名
obj[‘属性名’]
在for in循环中，由于prop是字符串类型，所以相当于用的是第二种访问方式
而在上面的代码中,obj2[age]这种方式，age代表一个变量，这个变量明显没有定义，所以会报错。但是如果obj2.age = 18，这种方式却可以定义一个属性。
我们可以看到在上面还有一种情况，那就是obj2[name] = 'abc’居然不报错，而且结果是{" ": ‘abc’}。
这是因为name这个变量有点特殊，每个窗口都有一个name属性，默认是空的。


for of 遍历值


[js中的for in 和 for of 的区别](https://blog.csdn.net/m0_37686205/article/details/89162049)