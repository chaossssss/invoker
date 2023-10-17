echarts饼图滚动



let curIndex = ref(0)
onMounted(() => {
  nextTick(() => {
    pieChart.value.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: curIndex.value,
    })
  })
})
const mouseoverMethod = (v) => {
  pieChart.value.dispatchAction({
    type: 'hideTip',
    seriesIndex: 0,
    dataIndex: curIndex.value,
  })
  pieChart.value.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: curIndex.value,
  })
  curIndex.value = v.dataIndex

  // 高亮显示悬停的那块
  pieChart.value.dispatchAction({
    type: 'hideTip',
    seriesIndex: 0,
    dataIndex: v.dataIndex,
  })
  // 当检测到鼠标悬停事件，取消所有选中高亮
  pieChart.value.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: v.dataIndex,
  })
}
const mouseoutMethod = (v) => {
  pieChart.value.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: curIndex.value,
  })
  pieChart.value.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: curIndex.value,
  })
}

const timer = ref(null)
timer.value = setInterval(function () {
  var dataLen = option.value.series[0].data.length
  pieChart.value.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex.value })
  curIndex.value = (curIndex.value + 1) % dataLen
  pieChart.value.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: curIndex.value,
  })
}, 4000)
onUnmounted(() => {
  clearInterval(timer.value)
})