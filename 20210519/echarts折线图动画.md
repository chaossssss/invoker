    chartMethod() {
      let _this = this;
      let myChart = _this.$echarts.init(_this.$refs.chartBox);
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "绿色",
            type: "line",
            lineStyle: {
              color: "rgba(0,0,0,0)",
            },
            itemStyle: {
              normal: {
                color: '#00ffbf'
              }
            },
            areaStyle: {
              normal: {
                //前四个参数代表位置 左下右上，如下表示从上往下渐变色 紫色到暗蓝色，
                color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(0, 46, 34, .1)" },
                  { offset: 1, color: "rgba(76, 143, 243, 0)" },
                ]),
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "橘色",
            type: "line",
            lineStyle: {
              color: "#ffd427",
            },
            itemStyle: {
              normal: {
                color: "#ffd427",
              }
            },
            areaStyle: {
              normal: {
                //前四个参数代表位置 左下右上，如下表示从上往下渐变色 紫色到暗蓝色，
                color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(92,74,0, .1)" },
                  { offset: 1, color: "rgba(76, 143, 243, 0)" },
                ]),
              },
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "绿色",
            type: "lines",
            opacity: .2,
            coordinateSystem: "cartesian2d",
            polyline: true,
            effect: {
              show: true,
              trailLength: 0.8,
              period: 10, //光点滑动速度
              symbolSize: 6,
            },
            lineStyle: {
              normal: {
                color: '#00ffbf',
                width: 1,
                opacity: 0.6,
                curveness: 0.6,
              },
            },
            data: [
              {
                coords: [
                  ["周一", 120],
                  ["周二", 132],
                  ["周三", 101],
                  ["周四", 134],
                  ["周五", 90],
                  ["周六", 230],
                  ["周日", 210],
                ],
              },
            ],
          },
          {
            name: "橘色",
            type: "lines",
            opacity: .2,
            coordinateSystem: "cartesian2d",
            polyline: true,
            effect: {
              show: true,
              trailLength: 0.8,
              period: 10, //光点滑动速度
              symbolSize: 6,
            },
            lineStyle: {
              normal: {
                color: '#ffd427',
                width: 1,
                opacity: 0.6,
                curveness: 0.6,
              },
            },
            data: [
              {
                coords: [
                  ["周一", 220],
                  ["周二", 182],
                  ["周三", 191],
                  ["周四", 234],
                  ["周五", 290],
                  ["周六", 330],
                  ["周日", 310],
                ],
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },


    中心思想 使用 series:lines