Proxy基本语法

const obj = new Proxy(target, handler);

参数说明如下：

target: 被代理对象。
handler: 是一个对象，声明了代理target的一些操作。
obj: 是被代理完成之后返回的对象。

但是当外界每次对obj进行操作时，就会执行handler对象上的一些方法。handler中常用的对象方法如下：

1. get(target, propKey, receiver)
2. set(target, propKey, value, receiver)
3. has(target, propKey)
4. construct(target, args):
5. apply(target, object, args)