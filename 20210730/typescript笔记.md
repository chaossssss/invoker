function add(x: number,y: number): number {
  return x + y;
}

后面: number 设置返回值类型


完整函数类型

let myAdd: (x: number, y: number) => number = function(x: number,y: number): number {
  return x + y
}

let myAdd: (baseValue: number, increment: number) => number = 
function(x: number,y: number): number { return x + y }
参数设置名字和类型，名字其实不重要，类型对了就行




### 接口
function printLabel(labelledObj: { label: string }){
  console.log(labelledObj.lable)
}

使用接口
interface LabelledValue{
  label: string
}
function printLabel(labelledObj: LabelledValue){
  console.log(labelledObj.label)
}

option bags
形式
// 参数形式
interface SquareConfig {
  color?: string;
  width?: number
}
function createSquare(config: SquareCofig): {color: string; area: number}{  //函数内部实际使用的

}


函数this
function f(this: void){}