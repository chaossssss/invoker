<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})

export default class Home extends Vue {
  isShow = false
  num = 123
  msg = 'a'
  list: Array<string> = ['a'],
  tuple: [string,number] = ['hello', 10]
  mounted() {
    this.greet()
    this.getData({
      a: 'aaa',
      b: 2
    })
    this.bindEvents()
  }
  // 计算属性
  get computedMsg() {
    return 'hello ' + this.msg
  }
  bindEvents() {
    const drag: any = this.$refs.drag
    drag.addEventListener('click', (e: any) => {
      drag.style.borderColor = 'red'
    })
  }
  greet(): void {
    console.log(1111)
  }
  getData({a, b}: {a: string; b: string}): void{
    console.log(a, b)
  }
}
</script>