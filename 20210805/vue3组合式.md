```
<template>
  <div ref="root>This is a root element</div>
</template>
<script>
  import { ref, watchEffect } from 'vue'
  export default {
    setup() {
      const root = ref(null)
      watchEffect(() => {
        console.log(root.value)
      },
      {
        flush: 'post'
      })
      return {
         root
      }
    }
  }
</script>
```