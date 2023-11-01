方法一
<template>
  <div class="component-item">
    <e-charts ref="chart" :option="option" autoresize></e-charts>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { use } from 'echarts/core'
import { DataZoomComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import ECharts from 'vue-echarts'
import service from '@/utils/system/request'
import { getCompanyNetwork } from '@/api'

use([DataZoomComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer])
const chart = ref(null)
let tableData = []

getCompanyNetwork().then(({ data }) => {
  tableData = data
  option.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    // legend: {
    //   data: [{ name: '交办数', icon: 'rect' }],
    //   itemHeight: 4,
    //   itemWidth: 24,
    //   right: '5%',
    //   top: '5%',
    //   textStyle: {
    //     color: '#FFFFFF', // 图例文字颜色
    //     fontSize: '14px',
    //     fontFamily: 'SourceHanSansCN-Regular',
    //     fontWeight: 400
    //   }
    // },
    color: [
      {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: '#1489FF' },
          { offset: 1, color: 'rgba(33,90,213,0)' }
        ]
      }
    ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '2%',
      containLabel: true
    },
    dataZoom: {
      type: 'slider',
      show: false,
      start: 0,
      end: 50
    },
    xAxis: {
      type: 'category',
      data: data.map(e => e.companyName),
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: '#ACC9E6',
        // rotate: 20 //旋转
        width: 55,
        overflow: 'breakAll',
        lineHeight: 15,
        formatter: (value, index) => {
          if (value.length > 7) {
            return value.substring(0, 7) + '...'
          } else {
            return value
          }
        }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.2)',
          type: 'dashed' //虚线
        }
      },
      axisLabel: {
        color: '#ACC9E6'
      }
      // name: '单位：件'
    },
    series: [
      {
        name: '',
        type: 'bar',
        barWidth: '12', //间距
        stack: 'total',
        itemStyle: {
          barBorderRadius: [4, 4, 0, 0]
        },
        // label: {
        //   show: true
        // },
        emphasis: {
          focus: 'series'
        },
        data: data.map(e => e.networkCount)
      }
    ]
  }
  console.log(option.value)
  setInterval(() => {
    if (option.value.dataZoom.start === 0) {
      option.value.dataZoom.start = 51
      option.value.dataZoom.end = 100
    } else {
      option.value.dataZoom.start = 0
      option.value.dataZoom.end = 50
    }
  }, 5000)
})

const option = ref()
</script>
<style lang="scss" scoped>
.component-item {
  width: 433px;
  height: calc(100% - 53px - 20px);
  .component-item-chart {
    width: 433px;
    height: 100%;
  }
}
</style>





方法二
<template>
  <div class="seize">
    <ECharts ref="chartRef" class="mychart" :option="option" autoresize></ECharts>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import ECharts from 'vue-echarts'
import service from '@/utils/system/request'
use([CanvasRenderer, BarChart, TooltipComponent, TitleComponent, GridComponent, LegendComponent])
const colors = ref(['#FF3F1D', '#FF7C33', '#FDE725', '#1FAAFF', '#26FFB2'])
const chartRef = ref()
const timer = ref(null)
const data = ref([
  {
    addr: '海洲',
    name1: '疫情村（社区）',
    value1: 20,
    name2: '警戒型无疫村（社区）',
    value2: 30
  }
])
const seriesData = ref([])
const option = ref({
  color: colors.value,
  legend: {
    top: 10,
    left: 5,
    textStyle: {
      color: '#fff'
    },
    itemWidth: 8,
    itemHeight: 8,
    data: [
      {
        name: '疫情村（社区）'
      },
      {
        name: '警戒型无疫村（社区）'
      },
      {
        name: '警防范无疫村（社区）'
      },
      {
        name: '常态型无疫村（社区）'
      },
      {
        name: '优质型无疫村（社区）'
      }
    ]
  },
  grid: {
    top: 90,
    left: 30,
    right: 10,
    bottom: 30
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      type: 'category',
      axisLabel: {
        color: '#ccc'
      },
      axisLine: {
        lineStyle: {
          color: '#074D7A'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: []
    }
  ],
  yAxis: [
    {
      name: '单位： 个',
      nameTextStyle: {
        color: '#ccc'
      },
      type: 'value',
      axisLabel: {
        color: '#ccc',
        fontSize: 12
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.20)'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '疫情村（社区）',
      type: 'bar',
      barWidth: 15,
      stack: 'num',
      data: [15, 25, 12, 15]
    },
    {
      name: '警戒型无疫村（社区）',
      type: 'bar',
      barWidth: 15,
      stack: 'num',
      data: [5, 15, 2, 5]
    },
    {
      name: '警防范无疫村（社区）',
      type: 'bar',
      barWidth: 15,
      stack: 'num',
      data: [20, 4, 6, 25]
    },
    {
      name: '常态型无疫村（社区）',
      type: 'bar',
      barWidth: 15,
      stack: 'num',
      data: [20, 4, 6, 25]
    },
    {
      name: '优质型无疫村（社区）',
      type: 'bar',
      barWidth: 15,
      stack: 'num',
      data: [20, 4, 6, 25]
    }
  ]
})
const dataList = ref([])
const getDataList = () => {
  service.get('/data/mission/town').then(res => {
    // res.data.forEach(i => {
    //   if (i.townName.includes('周王庙')) {
    //     i.townName = '周王庙'
    //   } else {
    //     i.townName = i.townName.substring(0, 2)
    //   }
    // })
    // console.log(res.data)
    seriesData.value = res.data
    dataList.value = JSON.parse(JSON.stringify(res.data)).splice(0, 6)
    option.value.xAxis[0].data = dataList.value.map(i => i.townName)
    option.value.series[0].data = dataList.value.map(i => i.level1Count)
    option.value.series[1].data = dataList.value.map(i => i.level2Count)
    option.value.series[2].data = dataList.value.map(i => i.level3Count)
    option.value.series[3].data = dataList.value.map(i => i.level4Count)
    option.value.series[4].data = dataList.value.map(i => i.level5Count)
    chartRef.value.setOption(option.value)
  })
}
onMounted(() => {
  getDataList()

  let i = 6
  timer.value = setInterval(function () {
    if (i > 11) {
      i = 0
    }
    option.value.xAxis[0].data.shift()
    option.value.series[0].data.shift()
    option.value.series[1].data.shift()
    option.value.series[2].data.shift()
    option.value.series[3].data.shift()
    option.value.series[4].data.shift()

    let item = seriesData.value[i]
    option.value.xAxis[0].data.push(item.townName)
    option.value.series[0].data.push(item.level1Count)
    option.value.series[1].data.push(item.level2Count)
    option.value.series[2].data.push(item.level3Count)
    option.value.series[3].data.push(item.level4Count)
    option.value.series[4].data.push(item.level5Count)
    i++

    chartRef.value.setOption(option.value)
  }, 4000)
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>
<style lang="scss" scoped>
.seize {
  height: 100%;

  .mychart {
    height: 100%;
  }
}
</style>
