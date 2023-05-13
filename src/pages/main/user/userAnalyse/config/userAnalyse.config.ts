import type { EChartsOption } from "@/components/system/echarts";

export const option1: EChartsOption = {
  title: {
    text: '用户消费占比',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '用户购买率',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 45, name: '王老吉' },
        { value: 78, name: '榴莲蛋糕' },
        { value: 580, name: '零食礼包' },
        { value: 484, name: '玩具' },
        { value: 300, name: '学习用品' },
        { value: 96, name: 'T恤' },
        { value: 120, name: '化妆品' }
      ]
    }
  ]
};

export const option2: EChartsOption = {
  title: {
    text: '用户购买类别占比',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '类别占比',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '日用品' },
        { value: 735, name: '食品' },
        { value: 580, name: '酒水' },
        { value: 484, name: '香烟' },
        { value: 300, name: '其它' }
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

export const option3: EChartsOption = {
  title: {
    text: '用户分布'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['湛江市', '中山市', '广州市', '深圳市', '茂名市', '珠海市']
  },
  series: [
    {
      name: '男',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '女',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
};
