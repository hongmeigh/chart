function mapOptionFun(data) {
    return {
        title: {
            // text: '香港18区人口密度 （2011）',
            // subtext: '人口密度数据来自Wikipedia'
        },
        // grid: {
        //     top: 50,
        //     bottom: 50,
        //     left: 10, 
        //     right: 10
        // },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const htmlstr = `
                    <div style="text-align: left"><span style="font-size: 22px">接种门诊 ${params.data.vaccinationClinic}</span></div>
                    <div style="text-align: left"><span style="font-size: 20px; font-weight: bold; color: #fff">${params.data.implemented}</span> 已实施触点</div>
                    <div style="text-align: left"><span style="font-size: 20px; font-weight: bold; color: #00a0e9">${params.data.implemented}</span> 已实施 <span style="font-size: 20px; font-weight: bold; color: #ff8806">${params.data.willImplement}</span> 未实施</div>
                    <div style="text-align: left"><span style="font-size: 20px; font-weight: bold; color: #00a0e9">${params.data.vaccinationAmount}</span> 接种人数</div>
                    <div style="text-align: left"><span style="font-size: 20px; font-weight: bold; color: #00a0e9">${params.data.vaccineUsage}</span> 疫苗使用</div>
                    <div style="text-align: left"><span style="font-size: 20px; font-weight: bold; color: #00a0e9">${params.data.vaccineStockAmount}</span> 疫苗库存</div>
                `;
                return htmlstr;
            },
            padding: 15,
            extraCssText: 'background-color: #0b318f; box-shadow: 0 0 5px #fff'
        },
        geo: {
            show: true,
            map: 'china',
            roam: false,
            top: 30,
            itemStyle: {
                shadowColor: '#3b4393',
                shadowOffsetX: 6,
                shadowOffsetY: 6
            },
            regions: [
                {
                  name: "南海诸岛",
                  value: 0,
                  itemStyle: {
                    opacity: 0,
                    label: {
                      show: false
                    }  
                  }
                }
            ]
        },
        series: [
            {
                name: '数据',  
                type: 'map',  
                mapType: 'china',   
                roam: false,
                top: 30,
                label: {
                    show: true,
                    color: '#0b318f',
                    fontSize: 10,
                    // formatter: function(params) {
                    //     const htmlstr = `
                    //         <div><img src=""></div>
                    //         <div>${params.data.name}</div>
                    //     `;
                    //     return htmlstr;
                    // },
                },
                itemStyle: {
                    areaColor: '#00a0e9',
                    borderColor: '#3b4393',
                    borderWidth: 1
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#f8b62d'
                    }
                },
                markPoint: {
                    symbol: 'diamond'
                },
                data: data.cityContactsDetail.citysDetailList
            }
        ]
    }
} 
export default mapOptionFun;