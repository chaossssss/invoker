```
import Vue from 'vue'
import Component from 'vue-class-component'

// 表明此组件接受propMessage参数
@Component({
    props: {
        propMessage: String
    }
})
export default class App extends Vue {
    // 等价于 data() { return { msg: 'hello' } }
    msg = 'hello';
    
    // 等价于是 computed: { computedMsg() {} }
    get computedMsg() {
        return 'computed ' + this.msg
    }
    
    // 等价于 methods: { great() {} }
    great() {
        console.log(this.computedMsg())
    }
}
```


```
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    @Prop(Number) readonly propA: Number | undefined
    @Prop({ type: String, default: ''}) readonly propB: String
    
    // 等价于 watch: { propA(val, oldval) { ... } }
    @Watch('propA')
    onPropAChanged(val: String, oldVal: String) {
        // ...
    }
    
    // 等价于 resetCount() { ... this.$emit('reset') }
    @Emit('reset')
    resetCount() {
        this.count = 0
    }
    
    // 等价于 returnValue() { this.$emit('return-value', 10, e) }
    @Emit()
    returnValue(e) {
        return 10
    }
    
    // 等价于 promise() { ... promise.then(value => this.$emit('promise', value)) }
    @Emit()
    promise() {
        return new Promise(resolve => {
            resolve(20)
        })
    }
}
```