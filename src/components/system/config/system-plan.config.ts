import type { EChartsOption } from "@/components/system/echarts";

export const option: EChartsOption = {
  title: {
    text: '商品交易额'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['食品', '日用品', '香烟', '酒水', '其他'],
    right: 10
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '食品',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [53, 48, 62, 79, 83, 72]
    },
    {
      name: '日用品',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [123, 145, 107, 130, 158, 163]
    },
    {
      name: '香烟',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [146, 175, 138, 146, 185, 147]
    },
    {
      name: '酒水',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [64, 75, 42, 38, 59, 67]
    },
    {
      name: '其他',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [198, 178, 199, 208, 215, 223]
    }
  ]
};
