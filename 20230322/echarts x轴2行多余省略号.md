echarts x轴2行多余省略号


<template>
  <div class="component-item">
    <div class="btn-box">
      <div class="btn" :class="{ active: activeIndex === 1 }" @click="changeType(1)">企业</div>
      <div class="btn" :class="{ active: activeIndex === 2 }" @click="changeType(2)">月份</div>
    </div>
    <e-charts v-if="dataList.length > 0" ref="chart" :option="option" autoresize></e-charts>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { use } from 'echarts/core'
import { TooltipComponent, GridComponent, LegendComponent, DataZoomComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import ECharts from 'vue-echarts'
import { employeeMobilityAnalysis } from '@/api'
use([TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer, DataZoomComponent])
const activeIndex = ref(1)

const dataList = ref([])
const yztype = ref('15')
const timer = ref(null)
const getData = async () => {
  await employeeMobilityAnalysis({
    beginTime: '2022-01',
    yztype: yztype.value
  }).then(res => {
    dataList.value = res.data
    option.value.xAxis.data = dataList.value.map(i => i.yzname)
    option.value.series[0].data = dataList.value.map(i => i.pickupcount)
    option.value.series[1].data = dataList.value.map(i => i.extend)
    timer.value = setInterval(() => {
      if (option.value.dataZoom.start === 0) {
        option.value.dataZoom.start = 51
        option.value.dataZoom.end = 100
      } else {
        option.value.dataZoom.start = 0
        option.value.dataZoom.end = 50
      }
    }, 5000)
  })
}
getData()

const changeType = async i => {
  activeIndex.value = i
  if (timer.value) {
    clearInterval(timer.value)
  }
  if (i === 1) {
    yztype.value = '15'
  } else if (i === 2) {
    yztype.value = '16'
  }
  await getData()
}
const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    data: [
      { name: '入职数量', icon: 'rect' },
      { name: '离职数量', icon: 'rect' }
    ],
    itemHeight: 8,
    itemWidth: 8,
    top: '5%',
    left: '4%',
    itemGap: 60,
    textStyle: {
      color: '#FFFFFF', // 图例文字颜色
      fontSize: '14px',
      fontFamily: 'SourceHanSansCN-Regular',
      fontWeight: 400
    }
  },
  dataZoom: {
    type: 'slider',
    show: false,
    start: 0,
    end: 50
  },
  color: ['#1489FF', '#FFAF14'],
  grid: {
    left: '2%',
    right: '2%',
    bottom: '-1%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: dataList.value.map(e => e.name),
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0,                // 关键代码
      color: '#ACC9E6',
      width: 50,                  // 关键代码
      overflow: 'breakAll',       // 关键代码
      lineHeight: 15,
      formatter: (value, index) => {      // 关键代码
        if (value.length > 7) {
          return value.substring(0, 7) + '...'
        } else {
          return value
        }
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      name: '人',
      nameTextStyle: {
        color: '#ACC9E6',
        padding: [0, 40, 0, 0]
      },
      nameGap: 10,
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.2)',
          type: 'dashed' //虚线
        }
      },
      axisLabel: {
        color: '#ACC9E6'
      }
    }
  ],
  series: [
    {
      name: '入职数量',
      type: 'line',
      symbol: 'circle',
      itemStyle: {
        borderColor: 'rgba(20, 137, 255,0.2)',
        borderWidth: 6
      },
      data: dataList.value.map(e => e.entry)
    },
    {
      name: '离职数量',
      type: 'line',
      symbol: 'circle',
      itemStyle: {
        borderColor: 'rgba(255, 175, 20,0.2)',
        borderWidth: 6
      },
      data: dataList.value.map(e => e.leave)
    }
  ]
})
</script>
<style lang="scss" scoped>
.component-item {
  position: relative;
  width: 433px;
  height: calc(100% - 53px - 20px);
  overflow: hidden;
  .btn-box {
    position: absolute;
    top: 10px;
    right: 0;
    width: 132px;
    height: 28px;
    display: flex;
    text-align: center;
    line-height: 28px;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    .btn {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.81);
      flex: 0 0 64px;
      height: 28px;
      background: url('@/assets/images/cockpit/EnterpriseOutlets/btn.png') no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      &.active {
        color: #fff;
        background: url('@/assets/images/cockpit/EnterpriseOutlets/btn-active.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>