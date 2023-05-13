<template>
  <div class="user-analyse">
    <el-row>
      <el-col v-bind="layout">
        <div class="analyse-one">
          <div ref="chartDom1" class="chartDom1"></div>
          <div ref="chartDom2" class="chartDom2"></div>
        </div>
      </el-col>
      <el-col v-bind="layout">
        <div ref="chartDom3" class="analyse-two"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import echarts from "@/components/system/echarts";
import { option1, option2, option3 } from "./config/userAnalyse.config";
const chartDom1 = ref<HTMLDivElement | null>(null)
const chartDom2 = ref<HTMLDivElement | null>(null)
const chartDom3 = ref<HTMLDivElement | null>(null)
const layout = {
  xl: 12,
  lg: 12,
  md: 24,
  sm: 24,
  xs: 24
}

const chartInit = () => {
  const myChart1 = echarts.init(chartDom1.value!)
  const myChart2 = echarts.init(chartDom2.value!)
  const myChart3 = echarts.init(chartDom3.value!)
  option1 && myChart1.setOption(option1)
  option2 && myChart2.setOption(option2)
  option3 && myChart3.setOption(option3)
  window.addEventListener('resize', function() {
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
  });
}

onMounted(() => {
  chartInit()
})
</script>

<style lang="scss" scoped>
.user-analyse{
  width: 98%;
  margin: 10px auto;
  background-color: #fff;
  .analyse-one{
    .chartDom1{
      width: 100%;
      height: 300px;
    }
    .chartDom2{
      width: 100%;
      height: 400px;
    }
  }
  .analyse-two{
    height: 700px;
    padding: 20px;
  }
}
</style>
