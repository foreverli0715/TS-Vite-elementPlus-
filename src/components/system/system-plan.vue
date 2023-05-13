<template>
  <el-row class="system-plan" justify="space-evenly">
    <el-col class="plan-left" :xs="24" :sm="24" :md="14" :lg="15" :xl="15">
      <div class="plan-left-top" ref="chartDom"></div>
      <div class="plan-left-bottom">
        <el-image style="width: 100%; height: 200px" src="../../../public/img/system5.png" fit="contain" />
        <div style="font-size: 20px;font-weight: 800;padding: 10px;">尽请期待</div>
      </div>
    </el-col>
    <el-col class="plan-right" :xs="24" :sm="24" :md="9" :lg="8" :xl="8">
      <div style="
      background-color: #fff;
      padding: 10px 0 10px 20px;
      text-align: left;
      font-size: 15px;
      border: #eaecef 1px solid;
      border-bottom: none;">快捷导航</div>
      <div class="plan-right-top">
        <template v-for="(navIem, index) in navUrlItems" :key="index">
          <div @click="routerPush(navIem.url)">
            {{ navIem.name }}
          </div>
        </template>
      </div>
      <div class="plan-right-bottom">
        <el-empty description="description" />
        <div style="font-size: 20px;font-weight: 800;padding: 10px;">尽请期待</div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from "vue-router";
import userLoginStore from "@/store/login/login";
import echarts from "@/components/system/echarts";
import { option } from "../system/config/system-plan.config";

const loginStore = userLoginStore()
const router = useRouter()
const navUrlItems = ref<any[]>([])
const chartDom = ref<HTMLDivElement | null>(null)

const navUrl = () => {
  for(const navItem of loginStore.userMenu){
    if(navItem.children){
      for(const navChildrenItem of navItem.children){
        if(navChildrenItem.type == 2) navUrlItems.value.push(navChildrenItem)
      }
    }
  }
}

const routerPush = (navUrl: string) => {
  router.push(navUrl)
}

const chartInit = () => {
  const myChart = echarts.init(chartDom.value!)
  option && myChart.setOption(option)
  window.addEventListener('resize', function() {
    myChart.resize();
  });
}

onMounted(() => {
  navUrl()
  chartInit()
})
</script>

<style lang="scss" scoped>
.system-plan{
  margin: 0 auto;
  margin-bottom: 15px;
  width: 97%;

  & > .el-col{
    margin-top: 15px;
  }
  .plan-left{
    .plan-left-top{
      height: 400px;
      background-color: #fff;
      padding: 10px;
    }
    .plan-left-bottom{
      margin-top: 15px;
      background-color: #fff;
    }
  }
  .plan-right{
    .plan-right-top{
      display: grid;grid-template-columns: 50% 50%;
      grid-template-rows: repeat(3, 100px);
      background-color: #fff;
      & > div{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 15px;
        border: #eaecef 1px solid;
        cursor: pointer;
      }
      & > div:hover{
        box-shadow: 3px 2px 10px #989ca3;
          transition: all .3s ease-in-out;
        }
    }
    .plan-right-bottom{
      height: 400px;
      margin-top: 15px;
      background-color: #fff;
    }
  }
  // display: flex;
  // justify-content: space-between;
  // .plan-left{
  //   flex: 2;
  //   & > div{
  //     margin: 0 14px 14px 0;
  //     height: 100px;
  //     background-color: #fff;
  //   }
  // }
  // .plan-right{
  //   flex: 1;
  //   & > div{
  //     margin: 0 0 14px 0;
  //     height: 60px;
  //     background-color: #fff;
  //   }
  // }
}
</style>
