const props = defineProps({
  tabindex: {
    type: Number,
    default: 0
  },
})
watch(() => props.tabindex, (val) => {
  console.log(val)
}, {
  immediate: true
})