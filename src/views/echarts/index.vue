<template>
  <div>
    <h3>雷达图</h3> 
    <div ref="myChart" style="height: 520px; width: 100%" id="myChart"></div>
    <h3>柱状图</h3>
    <div ref="barChart" style="height: 520px; width: 100%" id="barChart"></div>
    <h3>饼状图</h3>
    <div ref="pieChart" style="height: 520%; width: 100%" id="pieChart"></div>
    <h3>柱状图结合折线图</h3>
    <div ref="barlineChart" style="height: 520px; width: 100%" id="barlineChart"></div>
    <h3>折线图</h3>
    <div ref="lineChart" style="height: 520px; width: 100%" id="lineChart"></div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: 'echarts-index',
  data() {
    return {}
  },
  mounted() {
    document.querySelector("#myChart").style.width = document.querySelector(".content").clientWidth;
    this.setMyEchart()
    this.setBarChart()
    this.setPieChart()
    this.setBarLineChart()
    this.setLineChart()
  },
  methods:{
    setMyEchart() {
      const myChart = this.$refs.myChart; // 通过ref获取到DOM节点
      if(myChart) {
        const thisChart = this.$echarts.init(myChart, 'pink') // 利用原型调取Echarts的初始化方法
        const option = {
          ooltip: {
            confine: true,
            enterable: true //鼠标是否可以移动到tooltip区域内
          },
          legend: {
            // top : '96%',                    // 图例距离顶部边距
            textStyle: {
              coFlor: "#202124",
              fontWeight: "bold",
              fontSize: "14"
            },
            data: ["学生个人", "班级平均"]
          },
          calculable: true,
          color: ["#00CA90", "#4285F4"],
          radar: {
            name: {
              textStyle: {
                color: "#fff",
                backgroundColor: "#999",
                fontSize: "10",
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: "出勤率", max: 1 },
              { name: "作业提交率", max: 1 },
              { name: "话题参与率", max: 1 },
              { name: "表现得星数", max: 1 },
              { name: "互动参与率", max: 1 }
            ],
            radius: 80
          },
          series: [
            {
              type: "radar",
              // 高亮样式。
              // emphasis: {
              //   itemStyle: {
              //     // 高亮时点的颜色。
              //     color: 'blue'
              //   },
              //   label: {
              //     show: true,
              //     // 高亮时标签的文字。
              //     formatter: 'This is a emphasis label.'
              //   }
              // },
              // itemStyle: {
              //   // 点的颜色。
              //   color: 'red'
              // },
              data: [
                {
                  value: [
                      0.85,0.94,0.24,0.56,0.23
                  ],
                  name: "学生个人"
                },
                {
                  value: [
                    0.90,0.85,0.37,0.85,0.52
                  ],
                  name: "班级平均"
                }
              ]
            }
          ]
        }
        thisChart.setOption(option) // 将配置项挂载到Echarts上
        // 调整容器大小，页面大小变化后Echarts也更改大小
        window.addEventListener("resize", function() {
          thisChart.resize()
        })
      }
    },
    setBarChart() {
      const barChart = this.$refs.barChart
      if(barChart) {
        const thisBarChart = this.$echarts.init(barChart)
        const option = {
          dataset: {
            // 提供一份数据。
            // source: [
            //   ['product', '2015', '2016', '2017'],
            //   ['Matcha Latte', 43.3, 85.8, 93.7],
            //   ['Milk Tea', 83.1, 73.4, 55.1],
            //   ['Cheese Cocoa', 86.4, 65.2, 82.5],
            //   ['Walnut Brownie', 72.4, 53.9, 39.1]
            // ]
            // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
            // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
            // 如果不指定 dimensions，也可以通过指定 series.encode
            // 完成映射，参见后文。
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
              { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
              { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
              { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
              { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
            ]
          },
          xAxis: {
            type: 'category',
            // data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
          },
          yAxis: {},
          series: [
          {
            type: 'bar',
            // name: '2015',
            // data: [89.3, 92.1, 94.4, 85.4]
          },
            {
              type: 'bar',
              // name: '2016',
              // data: [95.8, 89.4, 91.2, 76.9]
            },
            {
              type: 'bar',
              // name: '2017',
              // data: [97.7, 83.1, 92.5, 78.1]
            }
          ]
        }
        thisBarChart.setOption(option)
        window.addEventListener('resize', function() {
          thisBarChart.resize()
        })
      }
    },
    setPieChart() {
      const pieChart = this.$refs.pieChart
      if(pieChart) {
        const thisPieChart = this.$echarts.init(pieChart)
        const option = {
          dataset: [
            {
              // 这个 dataset 的 index 是 `0`。
              source: [
                ['Product', 'Sales', 'Price', 'Year'],
                ['Cake', 123, 32, 2011],
                ['Cereal', 231, 14, 2011],
                ['Tofu', 235, 5, 2011],
                ['Dumpling', 341, 25, 2011],
                ['Biscuit', 122, 29, 2011],
                ['Cake', 143, 30, 2012],
                ['Cereal', 201, 19, 2012],
                ['Tofu', 255, 7, 2012],
                ['Dumpling', 241, 27, 2012],
                ['Biscuit', 102, 34, 2012],
                ['Cake', 153, 28, 2013],
                ['Cereal', 181, 21, 2013],
                ['Tofu', 395, 4, 2013],
                ['Dumpling', 281, 31, 2013],
                ['Biscuit', 92, 39, 2013],
                ['Cake', 223, 29, 2014],
                ['Cereal', 211, 17, 2014],
                ['Tofu', 345, 3, 2014],
                ['Dumpling', 211, 35, 2014],
                ['Biscuit', 72, 24, 2014]
              ]
              // id: 'a'
            },
            {
              // 这个 dataset 的 index 是 `1`。
              // 这个 `transform` 配置，表示，此 dataset 的数据，来自于此 transform 的结果。
              transform: {
                type: 'filter',
                config: { dimension: 'Year', value: 2011 }
              }
              // 我们还可以设置这些可选的属性： `fromDatasetIndex` 或 `fromDatasetId`。
              // 这些属性，指定了，transform 的输入，来自于哪个 dataset。例如，
              // `fromDatasetIndex: 0` 表示输入来自于 index 为 `0` 的 dataset 。又例如，
              // `fromDatasetId: 'a'` 表示输入来自于 `id: 'a'` 的 dataset。
              // 当这些属性都不指定时，默认认为，输入来自于 index 为 `0` 的 dataset 。
            },
            {
              // 这个 dataset 的 index 是 `2`。
              // 同样，这里因为 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，
              // 那么输入默认来自于 index 为 `0` 的 dataset 。
              transform: {
                // 这个类型为 "filter" 的 transform 能够遍历并筛选出满足条件的数据项。
                type: 'filter',
                // 每个 transform 如果需要有配置参数的话，都须配置在 `config` 里。
                // 在这个 "filter" transform 中，`config` 用于指定筛选条件。
                // 下面这个筛选条件是：选出维度（ dimension ）'Year' 中值为 2012 的所有
                // 数据项。
                config: { dimension: 'Year', value: 2012 }
              }
            },
            {
              // 这个 dataset 的 index 是 `3`。
              transform: {
                type: 'filter',
                config: { dimension: 'Year', value: 2013 }
              }
            }
          ],
          series: [
            {
              type: 'pie',
              radius: 50,
              center: ['25%', '50%'],
              // 这个饼图系列，引用了 index 为 `1` 的 dataset 。也就是，引用了上述
              // 2011 年那个 "filter" transform 的结果。
              datasetIndex: 1
            },
            {
              type: 'pie',
              radius: 50,
              center: ['50%', '50%'],
              datasetIndex: 2
            },
            {
              type: 'pie',
              radius: 50,
              center: ['75%', '50%'],
              datasetIndex: 3
            }
          ]
        }
        thisPieChart.setOption(option)
        window.addEventListener("resize", function() {
          thisPieChart.resize()
        })
      }
    },
    setBarLineChart () {
      const barLineChart = this.$refs.barlineChart
      console.log('测试master')
      if(barLineChart) {
        const thisBarLineChart = this.$echarts.init(barLineChart)
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' }
          },
          legend: {},
          xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
              ]
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '降水量',
              min: 0,
              max: 250,
              position: 'right',
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              position: 'left',
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name: '降水量',
              type: 'bar',
              yAxisIndex: 0,
              data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
            },
            {
              name: '温度',
              type: 'line',
              smooth: true,
              yAxisIndex: 1,
              data: [
              6.0,
              10.2,
              10.3,
              11.5,
              10.3,
              13.2,
              14.3,
              16.4,
              18.0,
              16.5,
              12.0,
              5.2
              ]
            }
          ]
        }
        thisBarLineChart.setOption(option)
        window.addEventListener("resize", function() {
          thisBarLineChart.resize()
        })
      }
    },
    setLineChart () {
      const lineChart = this.$refs.lineChart
      if(lineChart) {
        const thisLineChart = this.$echarts.init(lineChart)
        const option = {
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              data: [10, 22, 28, 23, 19],
              type: 'line',
              areaStyle: {}
            },
            {
              data: [25, 14, 23, 35, 10],
              type: 'line',
              areaStyle: {
                color: '#ff0',
                opacity: 0.5
              }
            }
          ]
        }
        thisLineChart.setOption(option)
        window.addEventListener("resize", function() {
          thisLineChart.resize()
        })
      }
    }
  }
}
</script>
<style lang="">
  
</style>