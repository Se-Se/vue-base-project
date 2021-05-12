<template>
  <div id="myChart" :style="{width: '100%', height: '600px'}">1</div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
import {
    PieChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

@Options({
  props: {
    msg: String
  }
})
export default class EchartsCom extends Vue {

  name = 'EchartsCom';
  msg!: string;
  data() {
    return {};
  }
  mounted() {
    this.drawLine();
  }
  private drawLine() {
echarts.use(
    [TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]
);

var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

var chartDom:any = document.getElementById('myChart');
var myChart = echarts.init(chartDom);
var option;

var weatherIcons = {
    'Sunny': ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
    'Cloudy': ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
    'Showers': ROOT_PATH + '/data/asset/img/weather/showers_128.png'
};

option = {
    title: {
        text: '消费',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: ['交通', '衣服', '买菜', '日常花销', '化妆品']
    },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {
                    value: 600,
                    name: '交通',
                    label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                            '{hr|}',
                            '  {Sunny|}{value|202}{rate|55.3%}',
                            '  {Cloudy|}{value|142}{rate|38.9%}',
                            '  {Showers|}{value|21}{rate|5.8%}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            Sunny: {
                                height: 30,
                                align: 'left',
                                backgroundColor: {
                                    image: weatherIcons.Sunny
                                }
                            },
                            Cloudy: {
                                height: 30,
                                align: 'left',
                                backgroundColor: {
                                    image: weatherIcons.Cloudy
                                }
                            },
                            Showers: {
                                height: 30,
                                align: 'left',
                                backgroundColor: {
                                    image: weatherIcons.Showers
                                }
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'left'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                width: 40,
                                align: 'right',
                                padding: [0, 10, 0, 0]
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {value: 735, name: '衣服'},
                {value: 510, name: '买菜'},
                {value: 834, name: '日常花销'},
                {value: 1200, name: '化妆品'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    option && myChart.setOption(option);
  }
}
</script>
