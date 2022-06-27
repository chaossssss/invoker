import { defineComponent, PropType } from 'vue'
interface Student {
  name: string,
  class: string,
  age: number
}

const Component = defineComponent({
  props: {
    success: {
      type: String,
    }
    callback: {
      type: Function as PropType<() => void>
    },
    stundent: {
      type: Object as PropType<Student>,
      required: true
    }
  },
  data() {
    return {
      message: 'Vue3 code style'
    }
  },
  computed: {
    reversedMessage(): string {
      return this.message.split(' ').reverse().join('')
    }
  }

})
