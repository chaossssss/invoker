请求报文
Http请求报文由三部分组成：请求行，请求头，请求体
请求行：请求方法、请求地址、协议名称和版本号
请求头：Referer、User-Agent、Accept、Cookie、Cache-Control、Content-Length等属性。Content-Length可用于服务端判断消息接受完的条件
请求体：GET请求与POST请求传递方式不同(Message Body)

request line 和每个 header 各占一行，以换行符 CRLF（即 \r\n）分割
