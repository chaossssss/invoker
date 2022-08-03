命名空间的引用  用 /// 
/// <reference path = 'IShape.ts' />
namespace Drawing {
  export class Circle implements IShape {
    public draw() {
      console.log("Circle is drawn")
    }
  }
}