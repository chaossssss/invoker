map是一种数据结构，类似对象，里面的键的值可以是各种类型， 包括对象。


      WeakMap与Map类似，但有几点区别：

1、WeakMap只接受对象作为key，如果设置其他类型的数据作为key，会报错。

2、WeakMap的key所引用的对象都是弱引用，只要对象的其他引用被删除，垃圾回收机制就会释放该对象占用的内存，从而避免内存泄漏。

3、由于WeakMap的成员随时可能被垃圾回收机制回收，成员的数量不稳定，所以没有size属性。

4、没有clear()方法

5、不能遍历