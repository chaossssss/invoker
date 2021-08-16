```
//formatter里的代码
axisLabel: {    // 坐标轴标签
  show: true,  // 是否显示
  inside: false, // 是否朝内
  rotate: 0, // 旋转角度
  margin: 5, // 刻度标签与轴线之间的距离
  color: '#cbccce',  // 默认取轴线的颜色 
  formatter:function(params){
    var newParamsName = "";
    var paramsNameNumber = params.length;
    var provideNumber = 6;  //一行显示几个字
    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    if (paramsNameNumber > provideNumber) {
        for (var p = 0; p < rowNumber; p++) {
            var tempStr = "";
            var start = p * provideNumber;
            var end = start + provideNumber;
            if (p == rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber);
            } else {
                tempStr = params.substring(start, end) + "\n";
            }
            newParamsName += tempStr;
        }

    } else {
        newParamsName = params;
    }
    return newParamsName
  }
},
```