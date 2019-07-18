第一种
<div  @click="getData($event,'aaa')">点击</div>

methods : {
   getData(e,text) {
        console.log(text);
   }
}

第二种
<div data-text="aaa" ref="dataText"  @click="getData($event)">点击</div>
methods : {
   getData (e) {
       console.log(this.$refs.dataText.dataset.text);
   }
}

第三种
<div data-text="aaa" @click="getData($event)">点击</div>
methods : {
   getData (e) {
       console.log(e.target.getAttribute('data-text'));
   }
}