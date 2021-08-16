方法一：
```
HTML
<div id="app">
  <button  @click="getData($event,'100')">点我</button>
</div>

JS
methods : {
   getData(e,num) {
        console.log(num);     // 输出 100
   }
}
```

方法二：
```
HTML
<div id="app">
  <button data-num="100" ref="dataNum"  @click="getData($event)">点我</button>
</div>

JS
methods : {
   getData (e) {
       console.log(this.$refs.dataNum.dataset.num);     // 输出 100
   }
}
```

方法三：
```
HTML
<div id="app">
  <button data-num="100" @click="getData($event)">点我</button>
</div>

JS
methods : {
   getData (e) {
       console.log(e.target.getAttribute('data-num'));     // 输出 100
   }
}
```
作者：easonR
链接：https://www.jianshu.com/p/969285fc7729
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。