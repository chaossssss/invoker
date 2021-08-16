之前做个活动，自己定义了个json数据，通过比较成绩用js模板实现最后结果页面的展示。

用到了for in循环，不过记不清当时为什么放弃使用for循环了。

json数据
```
var resList = [{
        resScore: 0,
        s1: '',
        s2: '',
        s3: 0,
        resName: resNick,
        resImg: '/images/sc50.jpg',
        resBg: '/images/s50.jpg'
    },
    {
        resScore: 10,
        s1: '',
        s2: 1,
        s3: 0,
        resName: resNick,
        resImg: '/images/sc50.jpg',
        resBg: '/images/s50.jpg'
    }
]
```
渲染代码
```
for (var resIndex in resList) {
    // console.log(resIndex,resList[resIndex]);
    if (resList[resIndex].resScore == score) {
        console.log(resList[resIndex].resScore);
        var html = template('test', resList[resIndex]);
        document.getElementById('content').innerHTML = html;
    }
}
```
回过头网上查了下资料，for-in语句用于循环对象属性，不过在上面的代码中应该是当做索引来对待了。