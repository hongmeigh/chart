<template>
    <div class="chart-wrap">
        <div class="chart-left-wrap">
            <container class="left-top-cont-wrap" title="全 国 触 点">
                <div class="left-top-cont">
                    <div class="count-item">
                        <span class="count-left">已覆盖省市</span>
                        <span class="count-right">{{resdata.cityCount}}</span>
                    </div>
                    <div class="count-item">
                        <span class="count-left">已覆盖触点</span>
                        <span class="count-right">{{resdata.coverContacts}}</span>
                    </div>
                    <div class="count-item">
                        <span class="count-left">IOT数量</span>
                        <span class="count-right">{{resdata.IOTAmounts}}</span>
                    </div>
                </div>
            </container>
            <container class="bottom-cont-wrap" title="地 区 触 点">
                <div class="top-count">
                    <div class="flex-item">
                        <span class="blue">{{resdata.cityContactsDetail.totalImplemented}}</span> 已实施
                    </div>
                    <div class="flex-item">
                        <span class="blue">{{resdata.cityContactsDetail.totalImplementing}}</span> 实施中
                    </div>
                    <div class="flex-item">
                        <span class="orange">1000</span> 门诊数
                    </div>
                </div>
                <div class="privince-list-wrap" :style="{height: outHeight * 0.32 + 'px'}">
                    <div v-for="(item, index) in privinceDataList" :key="index" class="privince-item">
                        <div class="privince-name">{{item.name}}</div>
                        <div class="progress-wrap">
                            <div class="progress-ed" :style="{width: item.percent1 * 100 + '%'}"></div>
                            <div class="progress-will" :style="{width: item.percent2 * 100 + '%'}"></div>
                        </div>
                        <div class="total-count">{{item.vaccinationClinic}}</div>
                    </div>
                </div>
            </container>
        </div>
        <div class="chart-center-wrap">
            <div class="top-count">
                <span class="text">累计守护</span>
                <div class="count" v-for="(item, index) of resdata.grandTotalCount + ''" :key="index">
                    {{item}}
                </div>
            </div>
            <div id="mapchart" :style="{width: mapwidth + 'px', height: mapwidth * 0.8 + 'px'}"></div>
        </div>
        <div class="chart-right-wrap">
            <container class="left-top-cont-wrap" title="用 户 服 务">
                <div class="left-top-cont">
                    <div class="count-item">
                        <span class="count-left">服务人次</span>
                        <span class="count-right">{{handleNum(resdata.serviceAmount)}}</span>
                    </div>
                    <div class="count-item">
                        <span class="count-left">疫苗使用量</span>
                        <span class="count-right">{{handleNum(resdata.vaccineUsage)}}</span>
                    </div>
                    <div class="count-item">
                        <span class="count-left">疫苗库存量</span>
                        <span class="count-right">{{handleNum(resdata.stockAmount)}}</span>
                    </div>
                </div>
            </container>
            <container class="bottom-cont-wrap" title="IOT 状 态">
                <div class="bin-chart-cont">
                    <div id="piechart" :style="{width: mapwidth/2*0.9 + 'px', height: mapheight/2*0.9 < 200 ? 190 + 'px' : mapheight/2*0.9 + 'px'}"></div>
                </div>
                <div class="bar-chart-cont">
                    <div id="barchart" :style="{width: mapwidth/2*0.9 + 'px', height: mapheight/2*0.9 < 200 ? 190 + 'px' : mapheight/2*0.9 + 'px'}"></div>
                </div>
            </container>
        </div>
    </div>
</template>
<script>
import mapOptionFun from '../chartOptions/mapOption';
import pieOptionFun from '../chartOptions/pieOption';
import barOptionFun from '../chartOptions/barOption';
import chartdata from '../mock/chart-data.json';
import chinaMap from '../mock/china.json';
import container from '../components/container.vue';
//const axios = require('axios');
const echarts = require('echarts');
export default {
    data() {
        return {
            mapheight: window.innerHeight / 2,
            mapwidth: window.innerWidth / 2,
            outHeight: window.outerHeight,
            resdata: chartdata,
            privinceDataList: []
        }
    },
    components: {
        container: container
    },
    created() {

    },
    mounted() {
        this.handelData();
        this.initMapChart();
        this.initPieChart();
        this.initbarChart();
    },
    methods: {
        initMapChart() {
            echarts.registerMap('china', chinaMap);
            const mapChart = echarts.init(document.getElementById('mapchart'));
            mapChart.setOption(mapOptionFun(chartdata));
        },
        initPieChart() {
            const pieChart = echarts.init(document.getElementById('piechart'));
            pieChart.setOption(pieOptionFun(chartdata));
        },
        initbarChart() {
            const barChart = echarts.init(document.getElementById('barchart'));
            barChart.setOption(barOptionFun(chartdata));
        },
        handelData() {
            const list = chartdata.cityContactsDetail.citysDetailList.map((item) => {
                return {
                    ...item,
                    percent1: item.implemented / item.vaccinationClinic,
                    percent2: item.willImplement / item.vaccinationClinic
                }
            });
            this.privinceDataList = list;
        },
        handleNum(num) {
            let str = String(num);
            if (str.length <= 3) {
                return str;
            } else {
                const arr = [];
                for (let i = 1; i <= Math.ceil(str.length / 3); i++) {
                    let prevIndex = str.length - i * 3;
                    if (prevIndex < 0) {
                        prevIndex = 0;
                    }
                    arr.unshift(str.slice(prevIndex, str.length - (i - 1) * 3))
                }
                return arr.join(',')
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .chart-wrap {
        width: 100vw;
        min-height: 100vh;
        background: url(../assets/bg.png) top left no-repeat;
        background-size: 100% 100%;
        display: flex;
        .chart-left-wrap {
            width: 25%;
            height: 100%;
        }
        .chart-center-wrap {
            width: 50%;
            height: 100%;
            .top-count {
                padding-top: 150px;
                margin-bottom: 0;
                .text {
                    color: #0632ea;
                    font-weight: bold;
                    font-size: 32px;
                    margin-right: 10px;
                }
                .count {
                    display: inline-block;
                    color: #fff;
                    font-size: 30px;
                    font-weight: bold;
                    padding: 8px 8px;
                    margin: 3px;
                    background-color: #0632ea;
                }
            }
        }
        .chart-right-wrap {
            width: 25%;
            height: 100%;
        }
        .left-top-cont-wrap {
            height: 28vh;
            min-height: 260px;
            margin-top: 116px;
        }
        .left-top-cont {
            padding: 0 20px;
            margin-top: 25px;
        }
        .count-item {
            color: #fff;
            font-size: 22px;
            margin-top: 10px;
            overflow: hidden;
            .count-left {
                float: left;
            }
            .count-right {
                float: right;
                color: #00a0e9;
                font-size: 36px;
                font-weight: bold;
            }
        }
        .bottom-cont-wrap {
            height: 50vh;
            margin-top: 50px;
            min-height: 470px;
            .top-count {
                display: flex;
                color: #fff;
                font-size: 16px;
                margin-top: 20px;
            }
            .flex-item {
                text-align: center;
                flex: 1;
                .blue {
                    color: #00a0e9;
                    font-weight: bold;
                    font-size: 22px;
                }
                .orange {
                    color: #ff803f;
                    font-weight: bold;
                    font-size: 22px;
                }
            }
            .privince-list-wrap {
                overflow: auto;
                padding: 0 15px 15px;
                margin-top: 15px;
            }
            .privince-item {
                overflow: hidden;
                margin-top: 10px;
            }
            .privince-name {
                width: 20%;
                float: left;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                text-align: left;
            }
            .progress-wrap {
                width: 55%;
                float: left;
                margin-left: 2.5%;
                height: 8px;
                margin-top: 8px;
                overflow: hidden;
                background-color: #31587c;
            }
            .progress-ed {
                height: 100%;
                background-color: #00a0e9;
                float: left;
            }
            .progress-will {
                height: 100%;
                background-color: #ff803f;
                float: left;
            }
            .total-count {
                width: 20%;
                float: left;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
                opacity: 0.6;
                margin-top: 2px;
            }
        }
    }
</style>