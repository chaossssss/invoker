子组件
```
<!-- js -->
	this.$emit("listenToChildEvent","this message is from child")
```

父组件
```
<!-- html -->
	<DialogBox v-on:listenToChildEvent="showMsgFromChild"/>
<!-- js -->
	showMsgFromChild(data){
	  console.log(data)
	}
```