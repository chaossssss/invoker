URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。

通过FileReader.readAsDataURL(file)可以获取一段data:base64的字符串

通过URL.createObjectURL(blob)

执行时机

createObjectURL是同步执行（立即的）
FileReader.readAsDataURL是异步执行（过一段时间）
内存使用

createObjectURL返回一段带hash的url，并且一直存储在内存中，直到document触发了unload事件（例如：document close）或者执行revokeObjectURL来释放。
FileReader.readAsDataURL则返回包含很多字符的base64，并会比blob url消耗更多内存，但是在不用的时候会自动从内存中清除（通过垃圾回收机制）
兼容性方面两个属性都兼容ie10以上的浏览器。

优劣对比：

使用createObjectURL可以节省性能并更快速，只不过需要在不使用的情况下手动释放内存
如果不太在意设备性能问题，并想获取图片的base64，则推荐使用FileReader.readAsDataURL
