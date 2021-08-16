
<div ref="a" :id="a1">333</div>
vue获取dom的属性
this.$refs.a.id;
vue获取dom的内容
this.$refs.a.innerText;

列表渲染
<div v-for="(item,index) in list" ref="ele" @click="bind(idnex)">
	{{item.text}}
</div>
bind(index){
	let getMenuText = this.$refs.ele[index].innerText;
}