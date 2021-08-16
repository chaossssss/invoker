父页面
<TestBox @childFn.user="parentFn"/>
parentFn(num,evt){
	this.$broadcast('some-event',1,2,3)
	this.$invoke('TestBox','call')
	console.log('emit event',num)
},

子组件
  <view @tap="tap">点我触发</view>
  events = {
    'some-event': (p1, p2, p3, $event) => {
      console.log(p1)
      console.log(`broadcast:${this.$name} receive ${$event.name} from ${$event.source}`)
    }
  }

  methods = {
    tap(){
      this.$emit("childFn",100)
    },
    call(){
      console.log(`invoke被父组件请求事件`)
    }
  }