<template>
  <div class="system">
    <div class="system-info">
      <el-row>
        <el-col :xs="24" :sm="8" :md="3" :lg="3" :xl="3" class="system-info-avatar">
          <el-avatar :size="70" :src="userInfoImg"/>
        </el-col>
        <el-col :xs="24" :sm="16" :md="10" :lg="10" :xl="10" class="system-info-greeetings">
          <div class="greeetings-content">Hello, {{ userInfoName }}, 开始您一天的工作吧！</div>
          <div >{{ cityWeather?.city }}，今日{{ cityWeather?.weather }}，{{ cityWeather?.temperature }}℃</div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11" class="system-info-works">
          <div>
            <div>{{ getSystem?.data.matterChinese }}</div>
            <div>{{ getSystem?.data.matter }}</div>
          </div>
          <div>
            <div>{{ getSystem?.data.turnoverChinese }}</div>
            <div>{{ getSystem?.data.turnover }}+</div>
          </div>
          <div>
            <div>{{ getSystem?.data.memberChinese }}</div>
            <div>{{ getSystem?.data.member }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
      <systemContent />
      <systemPlan />
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login';
import { computed, ref, onMounted } from "vue";
import systemContent from '@/components/system/system-content.vue';
import systemPlan from '@/components/system/system-plan.vue';
import { weatherInfoRequest, systemInfoWorkRequest } from '@/http/main/system/system';
import { WeatherType, IDataWeatherType} from "@/http/main/system/type";

const weatherInfo= ref<WeatherType>({
  key: '029f1112cf66f995c0d2e16e1b13d59e',
  city: '440800'
})
const getWeather = ref<IDataWeatherType>()
const getSystem = ref()
const userInfoImg = computed(() => userLoginStore().userInfo.avatar)
const userInfoName = computed(() => userLoginStore().userInfo.name)
const cityWeather = computed(() => getWeather.value?.lives[0])

const getWeatherInfo = async () => {
  getWeather.value = await weatherInfoRequest(weatherInfo.value)
}

const getSystemInfo = async () => {
  getSystem.value = await systemInfoWorkRequest()
}

onMounted(() => {
  getWeatherInfo()
  getSystemInfo()
})
</script>

<style lang="scss" scoped>
.system{
  .system-info{
    width: 100%;
    padding: 10px 0;
    background-color: #fff;
    border-top: #f0f0f0 1px solid;
    .el-row{
      height: 100%;
      .system-info-avatar{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      .system-info-greeetings{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content:space-evenly;
        & > div:first-child{
          font-size: 18px;
          font-weight: 500;
          color: #262626;
        }
        & > div:last-child{
          font-size: 12px;
          color: #00000073;
        }
      }
      .system-info-works{
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        & > div{
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          & > div:first-child{
            font-size: 13px;
            color: #00000073;
          }
          & > div:last-child{
            font-weight: 500;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
