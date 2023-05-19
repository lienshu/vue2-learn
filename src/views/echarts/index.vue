<template>
  <div>
    <div ref="myChart" style="height: 520px; width: 100%" id="myChart"></div>
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
    }
  }
}
</script>
<style lang="">
  
</style>