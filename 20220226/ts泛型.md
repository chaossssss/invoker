[一文搞懂 TS 泛型，让你头不再晕](https://blog.csdn.net/semlinker/article/details/106882403)

function identity <T>(value: T): T {
  return value
}

适用于任何特定的类型 相当于一个参数 T代表类型

identity<Number>(1)


K（Key）：表示对象中的键类型；
V（Value）：表示对象中的值类型；
E（Element）：表示元素类型。



function identity <T, U>(value: T, message: U) : T {
  return value
}

console.log(identity<Number, string>(68, "Semlinker"))


泛型接口

interface Identities<V, M> {
  value: V,
  message: M
}


function identity<T, U> (value: T, message: U): Identities<T, U> {
  let identities: Identities<T, U> = {
    value,
    message
  }
  return identities
}



泛型类
interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}

class IndentityClass<T> implements GenericInterface<T> {
  value: T
  constructor(value: T) {
    this.value = value
  }
  getIdentity(): T {
    return this.value
  }
}

const myNumberClass = new IdentityClass<Number>(68)
const myStringClass = new IdentityClass<string>("Semlinker!")



泛型约束
function identity<T>(arg: T): T {
  console.log(arg.length)   // error
  return arg
}

这时候不知道T含有length属性

interface Length {
  length: number;
}

function indentity<T extends Length>(arg: T): T {

}


检查对象上的键是否存在
取值可以为多种类型中的一种
let myFavoriteNumber: string | number


interface Person {
  name: string;
  age: number;
  location: string
}
type K1 = typeof Person;
type K2 = typeof Person[];
type K3 = typeof { [x: string]: Person }

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}


class Point2D implements Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function newPoint(
  pointConstructor: PointConstructor,
  x: number,
  y: number
): Point {
  return new pointConstructor(x, y)
}