曲线测试了下是可以的
用ai导出成svg
```
    var obj = document.querySelector("path");
    var length = obj.getTotalLength();
    console.log(length); // 102
```
用这个方法计算出整个长度

```
  @keyframes lineMove {
    0% {
      stroke-dasharray: 0, 102;
    }
    100% {
      stroke-dasharray: 102, 102;
    }
  }
  .line {
    animation: lineMove 3s ease-out infinite;
  }
```