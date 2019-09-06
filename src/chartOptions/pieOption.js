function pieOptionFun(data) {
    return {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: {
            left: 100
        },
        legend: {
            orient: 'vertical',
            right: 10,
            bottom: 20,
            itemWidth: 20,
            itemHeight: 10,
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
            data: ['正常','超温','低温','维修','停用']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                // radius : '50%',
                // center: ['45%', '45%'],
                data:[
                    {value:335, name:'正常', itemStyle: {color: '#00a0e9'}},
                    {value:310, name:'超温', itemStyle: {color: '#f39800'}},
                    {value:234, name:'低温', itemStyle: {color: '#f3eb00'}},
                    {value:135, name:'维修', itemStyle: {color: '#c30d23'}},
                    {value:30, name:'停用', itemStyle: {color: '#333333'}}
                ],
                label: {
                    formatter: "{d}%",
                    textStyle: {
                        fontSize: 16,
                        color: '#fff'
                    }
                },
                labelLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
}
export default pieOptionFun;