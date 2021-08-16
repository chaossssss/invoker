第一步：调整文字的显示大小，手机上文字可以更小，这里我用的是8px字号

第二步：设置最小扇区角度，minAngle（最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互）

第三步：avoidLabelOverlap（是否启用防止标签重叠策略，默认默认开启）

第四步：文字换行展示，echarts给我们提供了一个 formatter（标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行） 属性。

```
series: [
            {
                type: 'pie',
                clickable:false,　　　　　　 //是否开启点击
                minAngle: 5,           　　 //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                avoidLabelOverlap: true,   //是否启用防止标签重叠策略
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                silent: true,　　　　　　　　//图形是否不响应和触发鼠标事件
                radius: ['30%', '60%'],
                center: ['50%', '50%'],
                data: [],
                label:{
                    align: 'left',
                    normal:{
                        formatter(v) {
                            let text = Math.round(v.percent)+'%' + '' + v.name
                            if(text.length <= 8)
                            {
                                return text;
                            }else if(text.length > 8 && text.length <= 16){
                                return text = `${text.slice(0,8)}\n${text.slice(8)}`
                            }else if(text.length > 16 && text.length <= 24){
                                return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16)}`
                            }else if(text.length > 24 && text.length <= 30){
                                return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16,24)}\n${text.slice(24)}`
                            }else if(text.length > 30){
                                return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16,24)}\n${text.slice(24,30)}\n${text.slice(30)}`
                            }
                        },
                        textStyle : {
                            fontSize : 8
                        }
                    }
                }
            }

        ],
```