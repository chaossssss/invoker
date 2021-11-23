特殊符号
? 可选属性 不全都是必需的

option bags 看上去代表返回数据的格式（不确定对不对）
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: "black"});


readonly 只读属性 刚刚创建的时候修改其值
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Ponit = {
  x: 10,
  y: 20
}
p1.x = 5; // error!

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: String]: any;
}



具有ReadonlyArray<T> 与Array<T>相似
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!



属性接口
function printLabel(labelledObj: {label: string})
{}属性校验

等同于

interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue){

}