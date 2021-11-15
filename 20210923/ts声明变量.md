[vue + typescript 踩坑笔记](https://blog.csdn.net/weixin_33984032/article/details/91446233)
[Vue中使用TypeScript](https://www.jianshu.com/p/ac6303e3424f)
interface obj {
  name: string,
  age: number
}

function say_something({name, age}: obj):void {
  console.log(name, age)
}



@Component({
  components: {
    MenuBar
  }
})

@Emit()
emitTodo(n: string){
  console.log('hello')
}

@Watch('child')
onchangeValue(newValue: string, oldVal: string){

}
@Watch('person',{immediate: true, deep: true})
onChangeValue(newVal: Person, oldVal: Person){

}

@Prop(Number) propA!: number;
@Prop({default: 'default value'}) propB!: string;
@Prop([String, Boolean]) propC: string | boolean;