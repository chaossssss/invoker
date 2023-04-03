[https://blog.csdn.net/sinat_38592878/article/details/111474431](https://blog.csdn.net/sinat_38592878/article/details/111474431)

father.vue
<template>

  <div>text: {{ text }}</div>
  <ChildText v-model:text="text" />
</template>
<script setup>
import { ref } from "vue";
import ChildText from "./Child.vue";
const text = ref("");
</script>

child.vue
<template>
<input type="text" v-model="mytext" @input="change" />
</template>

<script setup>
import { defineEmits, ref } from "vue";
const props = defineProps({
  text: String,
});
const mytext = ref("");
const emit = defineEmits(["update:text"]);
const change = () => {
  emit("update:text", mytext.value);
};
</script>
