itemStyle: {
    normal: {
        color: params => { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
            return new echarts.graphic.LinearGradient(
                1, 1, 0, 0, [{
                        offset: 0,
                        color: colorList.first[params.dataIndex]
                    },
                    {
                        offset: 1,
                        color: colorList.second[params.dataIndex]
                    }
                ])
        }
    }
},