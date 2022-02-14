[getElementsByClassName 和querySelector简单区别](https://blog.csdn.net/m0_45480496/article/details/113748451)


getElementsByClassName：

（1）返回一个包含了所有指定类名的子元素的类数组对象，返回对象是动态的NodeList。
（2）getElementsByClassName()是HTML5 新增的DOM API（IE8以下不支持）
(3) 对于现代浏览器开发，还可以使用querySelector()和querySelectorAll()。他们的功能更加强大。


querySelectorAll：

1)返回与指定的选择器组匹配的文档中的元素列表，返回对象是静态的NodeList。
2)querySelector()和querySelectorAll()是新标准的Selectors
API(选择符API)。IE8+、FF3.5+、Safari 3.1+、Chrome、Opera 10+支持。
3)querySelector()接受一个css选择器作为参数,然后返回DOM中匹配的第一个元素
4) querySelectorAll()接受一个css选择器作为参数,然后返回DOM中匹配的元素的集合数组