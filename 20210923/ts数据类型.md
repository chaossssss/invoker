string


number


boolean


Object


function


null和undefined


any


never 完全无返回值
代码阻断
执行 throw new Error, return process.exit(1), while(true){}


void undefined 的子类型 用在回调函数
return undefined


enum 枚举
1.默认值从0开始递增
enum Color{Red, Green, Blue}
let c: Color = Color.Red;
let d: Color = Color.Green;
let e: Color = Color.Blue;
console.log('enum',c,d,e) // 0,1,2

2.手动设置初始值
enum Color {Red, Green=2, Blue}
let c: Color = Color.Red;
let d: Color = Color.Green;
let e: Color = Color.Blue;
console.log('enum',c,d,e) //0,2,3

3.属性获取
enum Color {Red, Green=2, Blue,Yellow=7 ,Dark}
let c1: string = Color[0];
let c: Color = Color.Red;
let d1: string = Color[1];
let d: Color = Color.Green;
let e1: string = Color[2];
let e: Color = Color.Blue;
let f1: string = Color[3];
let f: Color = Color.Yellow;
let g1: string = Color[4];
let g: Color = Color.Dark;
console.log('enum',c1,c,d1,d,e1,e,f1,f,g1,g) //Red 0 undefined 2 Green 3 Blue 7 undefined 8

tuple 元组 存储不同类型的元素
const list: [string, number] = ['sherlock', 1887]
const list: [number, string?, boolean?]
const list: [number, ...string[]] = [10,'a','b','c']



类型断言 <> 和 as
<类型>值
值 as 类型