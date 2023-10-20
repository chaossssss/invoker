echarts地图颜色



<template>
  <ECharts ref="chartRef" class="chart" :option="option" autoresize />
</template>

<script setup>
import { ref } from 'vue'
import { asyncComputed } from '@vueuse/core'
import { use, registerMap } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { MapChart } from 'echarts/charts'
import { GeoComponent, TooltipComponent, VisualMapComponent } from 'echarts/components'
import ECharts from 'vue-echarts'

import MapData from './mapData.json'
use([MapChart, GeoComponent, VisualMapComponent, CanvasRenderer, TooltipComponent])
const chartRef = ref()
const regionsData = [
  {
    name: '许村镇',
    value: 10,
  },
  {
    name: '长安镇',
    value: 11,
  },
  {
    name: '周王庙镇',
    value: 12,
  },
  {
    name: '盐官镇',
    value: 13,
  },
  {
    name: '斜桥镇',
    value: 14,
  },
  {
    name: '丁桥镇',
    value: 15,
  },
  {
    name: '尖山新区',
    value: 16,
  },
  {
    name: '袁花镇',
    value: 17,
  },
  {
    name: '马桥街道',
    value: 18,
  },
  {
    name: '海洲街道',
    value: 19,
  },
  {
    name: '硖石街道',
    value: 20,
  },
  {
    name: '海昌街道',
    value: 21,
  },
]

// let regionsTemp = regionsData.map((i) => {
//   return {
//     name: i.name,
//     label: {
//       show: true,
//       color: '#fff',
//     },
//     itemStyle: {
//       areaColor: i.color,
//       opacity: 1,
//       borderWidth: 2,
//       // borderColor: i.color,
//       // shadowColor: '#0049A2',
//       // shadowOffsetX: 0,
//       // shadowOffsetY: 15,
//     },
//     emphasis: {
//       itemStyle: {
//         areaColor: i.color,
//         opacity: 1,
//         borderWidth: 2,
//         // borderColor: i.color,
//         // shadowColor: '#0049A2',
//         // shadowOffsetX: 0,
//         // shadowOffsetY: 15,
//       },
//       label: {
//         color: '#fff',
//       },
//     },
//   }
// })

const option = asyncComputed(async () => {
  const mapData = JSON.parse(MapData)
  registerMap('haining', mapData)
  return {
    geo: {
      map: 'haining',
      aspectScale: 0.9,
      zoom: 1.25,
      itemStyle: {
        shadowColor: '#0049A2',
        shadowOffsetX: 0,
        shadowOffsetY: 15,
      },
      layoutCenter: ['50%', '52%'],
      layoutSize: '108%',
      // regions: regionsTemp,
    },
    visualMap: {
      type: 'piecewise',
      min: 10,
      max: 21,
      splitNumber: 12,
      align: 'left',
      right: 20,
      bottom: 20,
      itemWidth: 0,
      itemHeight: 0,
      itemGap: 5,
      // itemSymbol: 'circle',
      orient: 'vertical',
      //区域颜色
      color: [
        '#e6cf98',
        '#ddb93a',
        '#dea139',
        '#c77f2d',
        '#c77f6d',
        '#c06928',
        '#cb592c',
        '#c34629',
        '#c34679',
        '#c37679',
        '#c49679',
        '#c4c679',
      ],
      //区域颜色范范围
      // pieces: [
      //   { min: 10, max: 15 },
      //   { min: 15, max: 17 },
      //   { min: 17, max: 21 },
      // ],
      textStyle: {
        color: '#fff',
        fontSize: 14,
      },
    },
    tooltip: {
      show: false,
      trigger: 'item',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      extraCssText: 'box-shadow: 0 0 0 transparent',
    },
    series: [
      {
        type: 'map',
        aspectScale: 0.9,
        zoom: 1.25,
        selectedMode: false,
        layoutCenter: ['50%', '52%'],
        layoutSize: '108%',
        map: 'haining',
        zlevel: 1,
        label: {
          show: true,
        },
        itemStyle: {
          borderColor: 'rgba(196,223,255,1)',
          borderWidth: 2,
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(102,172,191,1)',
              },
              {
                offset: 1,
                color: 'rgba(21,118,145,1)',
              },
            ],
            global: false,
          },
        },
        data: regionsData,
      },
    ],
  }
}, {})
</script>

<style lang="scss" scoped>
.chart {
  height: 100vh;
  width: 100vw;
}
</style>

