http 长轮询
http 长轮询是server 收到请求后如果有数据，立刻响应请求；如果没有数据 就会 停留 一段时间，这段时间内，如果 server 请求的数据到达（如查询数据库或数据的逻辑处理完成），就会立刻响应；如果这段时间过后，还没有数据到达，则以空数据的形式响应http请求；若浏览器收到的数据为空，会再次发送同样的http请求到server；

http 短轮询
http 短轮询是 server 收到请求 不管是否有数据到达都直接响应http 请求；如果浏览器收到的数据为空，则隔一段时间，浏览器又会发送相同的http请求到server 以获取数据响应；

WebSocket
WebSocket 是 html5 规范发布的新协议，和 http协议完全是两个不同的概念，或者说基本没关系；WebSocket 协议 和 http协议的唯一联系点在于，WebSocket 协议为了兼容现有浏览器的握手规范而采用了 http协议中的握手规范 以建立WebSocket连接；
[详细介绍](https://blog.csdn.net/baidu_38990811/article/details/79172163)
