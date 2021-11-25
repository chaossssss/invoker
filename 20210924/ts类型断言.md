值 as 类型 (记住这种)

双重断言

interface Cat {
  ren(): void;
}
interface Fish {
  swim(): void;
}
function testCat(cat: Cat){
  return (cat as any as Fish)
}