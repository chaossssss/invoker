```
#使用的地址是直接使用的IP端口的，原因就出在这里：当请求地址是ip的时候 a 标签的 download 属性无法生效。
<a href="http://192.168.xx:8089/virtualPath/facility/document/2018/07/09/44a9a76a-084a-415a-9d50-e26ea28b55ce/0b48ed694ef510393ad2e829d6ec2fad.jpg" download="" class=""></a>

#解决办法：将ip改成域名
<a href="http://www.xx.com/virtualPath/facility/document/2018/07/09/44a9a76a-084a-415a-9d50-e26ea28b55ce/0b48ed694ef510393ad2e829d6ec2fad.jpg" download="" class=""></a>
```