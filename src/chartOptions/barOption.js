function barOptionFun(data) {
    return {
        grid: {
            show: true,
            left: 40,
            top: 10,
            right: 10
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            nameTextStyle: {
                color: '#fff'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#f8f8f8',
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: true,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                }
            },
            data: [
                {value: '正常', textStyle: {color: '#fff'}},
                {value: '超温', textStyle: {color: '#fff'}},
                {value: '低温', textStyle: {color: '#fff'}},
                {value: '维修', textStyle: {color: '#fff'}},
                {value: '停用', textStyle: {color: '#fff'}}
            ]
        },
        yAxis: {
            nameTextStyle: {
                color: '#fff'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#f8f8f8',
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: true,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                }
            },
            type: 'value'
        },
        series: [{
            label: {
                color: '#fff'
            },
            barWidth: '22%',
            data: [
                {value:335, name:'正常', itemStyle: {color: '#00a0e9'}},
                {value:310, name:'超温', itemStyle: {color: '#f39800'}},
                {value:234, name:'低温', itemStyle: {color: '#f3eb00'}},
                {value:135, name:'维修', itemStyle: {color: '#c30d23'}},
                {value:30, name:'停用', itemStyle: {color: '#333333'}}
            ],
            type: 'bar'
        }]
    };
}
export default barOptionFun;