本质是函数
装饰器是为元素添加注解的语法糖

function logClass(target: any) {
  // 保存类构造函数原型对象引用
  const original = target.prototype;

  // 重新定义构造函数
  const constructor = function (...args) {
    console.log(`Creating instance with arguments: ${args}`);
    // 调用原来的构造函数
    original.constructor.apply(this, args);
  };

  // 给构造函数添加元数据
  Object.defineProperty(constructor, 'name', { value: target.name });
  Object.defineProperty(constructor, 'description', { value: 'This is a decorated class' });

  // 重新定义构造函数原型对象
  constructor.prototype = original;

  // 返回新的构造函数
  return constructor;
}

@logClass