echarts 饼图高亮

[Echarts 问题解决 —— 环状饼图默认显示第一条数据及提示框、鼠标移动上去后不突出、中间展示指定样式数字、鼠标移到扇形上显示不同颜色的数字、循环高亮显示饼图各模块的扇形；](https://blog.csdn.net/Lyrelion/article/details/112168079)
<template>
<ECharts
ref="pieChart"
class="chart"
:option="option"
@mouseover="mouseoverMethod"
@mouseout="mouseoutMethod"
autoresize

> </ECharts>
> </template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import ECharts from 'vue-echarts'
import { nextTick, onMounted } from 'vue'
use([CanvasRenderer, PieChart, TooltipComponent, TitleComponent, GridComponent, LegendComponent])
const pieChart = ref()
const props = defineProps({
  data: {
    type: Object,
  },
})
const total = ref(0)
const option = ref({
  color: ['#3793FF', '#6B59FF', '#42FFFF', '#FF9542', '#FFD558', '#4BFF32'],
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  legend: {
    top: 30,
    left: 155,
    orient: 'vertical',
    data: props.data.legend,
    textStyle: {
      color: '#fff',
      fontSize: 11,
    },
    itemWidth: 8,
    itemHeight: 8,
  },
  series: [
    {
      type: 'pie',
      radius: ['55%', '65%'],
      center: ['30%', '50%'],
      data: props.data.value,
      labelLine: {
        show: false,
      },
      label: {
        show: false,
        position: 'center',
        color: '#4c4a4a',
        formatter: '{rate|{d}%}' + '\n\r' + '{total|{c}}' + '\n\r' + '{active|{b}}',
        rich: {
          rate: {
            fontSize: 14,
            fontFamily: 'YouSheBiaoTiHei',
            color: '#00F6FF',
          },
          total: {
            fontSize: 14,
            fontFamily: 'YouSheBiaoTiHei',
            color: '#FFE46E',
          },
          active: {
            fontFamily: 'SourceHanSansCN-Regular, SourceHanSansCN',
            fontSize: 12,
            color: '#fff',
            margin: [2, 0, 0, 0],
          },
        },
      },
      emphasis: {
        show: true,
        label: {
          show: true,
          color: '#4c4a4a',
          formatter: '{rate|{d}%}' + '\n\r' + '{total|{c}}' + '\n\r' + '{active|{b}}',
          rich: {
            rate: {
              fontSize: 14,
              fontFamily: 'YouSheBiaoTiHei',
              color: '#00F6FF',
            },
            total: {
              fontSize: 14,
              fontFamily: 'YouSheBiaoTiHei',
              color: '#FFE46E',
            },
            active: {
              fontFamily: 'SourceHanSansCN-Regular, SourceHanSansCN',
              fontSize: 12,
              color: '#fff',
              margin: [2, 0, 0, 0],
            },
          },
        },
      },
    },
    {
      type: 'pie',
      radius: ['35%', '42%'],
      center: ['30%', '50%'],
      itemStyle: {
        color: 'rgba(40,71,102,0.5)',
      },
      silent: true,
      data: [
        {
          value: 100,
          name: '',
        },
      ],
    },
  ],
})
onMounted(() => {
  nextTick(() => {
    pieChart.value.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0,
    })
  })
})
const mouseoverMethod = (v) => {
  if (v.dataIndex != 0) {
    // 高亮显示悬停的那块
    pieChart.value.dispatchAction({
      type: 'hideTip',
      seriesIndex: 0,
      dataIndex: 0,
    })
    // 当检测到鼠标悬停事件，取消所有选中高亮
    pieChart.value.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 0,
    })
  }
}
const mouseoutMethod = (v) => {
  pieChart.value.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: 0,
  })
  pieChart.value.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0,
  })
}
</script>
<style lang="scss" scoped>
.chart {
  height: 100%;
}
</style>
