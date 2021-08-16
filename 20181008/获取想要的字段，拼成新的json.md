情景
============
后台请求得到的数据中有大量不需要的字段，而我真正需要的字段可能就几个，所以我希望能数据精简。然后网上查找了相关的方法，大致思路就是拿到每一条的数据，然后添加到自己定义的json数组中。

```
var json = [];
for (var i = 0; i < data.length; i++) {
    var j = {};
    j.name = data[i].TeamName;
    j.y = data[i].TeamIntegral;
    j.color = data[i].TeamColor;
    json.unshift(j);
}
```