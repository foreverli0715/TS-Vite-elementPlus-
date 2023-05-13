<template>
  <div class="header-userInfo">
    <el-dropdown style="border: none;">
      <div class="avatarBox">
        <el-avatar :size="30" :src="userInfoAvatar" />
        <span>{{ userInfoName }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="drawer1 = true">个人信息</el-dropdown-item>
          <el-dropdown-item @click="drawer2 = true">系统概述</el-dropdown-item>
          <el-dropdown-item divided @click="toBack">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-drawer
      v-model="drawer1"
      title="I am the title"
      :with-header="false"
      size="20%"
      style="display: flex;
      justify-content: center;
      align-items: center;
    ">
      <div style="text-align: center;">
        <el-avatar :size="80" :src="userInfoAvatar" />
      </div>
      <div style="text-align: center;margin-top: 15px;font-size: 20px;">{{ userInfoName }}</div>
      <div style="text-align: center;margin-top: 15px;font-size: 20px;">{{ userInfoRoleName }}</div>
    </el-drawer>
    <el-drawer
      v-model="drawer2"
      title="I am the title"
      :with-header="false"
      size="25%"
      style="display: flex;
      justify-content: center;
      align-items: center;
    ">
      <h2>项目介绍</h2>
      <p>
        本系统是一个电商后台管理系统的前端项目，基于Vue3+Element-Plus+TypeScript实现。 主要包括商品管理、订单管理、数据统计、用户管理、登录退出等功能。
      </p>
      <h2>开发技术栈</h2>
      <p>此项目开发我用到的技术有：vue3+node.js+vite+element-plus+axios+mockjs+pinia+echarts+typeScript</p>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer1 = ref(false)
const drawer2 = ref(false)
const userInfoAvatar = computed(() => {
  return userLoginStore().userInfo.avatar
})

const userInfoName = computed(() => {
  return userLoginStore().userInfo.name
})

const userInfoRoleName = computed(() => {
  return userLoginStore().userInfo.roleName
})

const toBack = () => {
  router.push('/login')
  ElNotification({
            title: '退出成功',
            type: 'success',
          })
}

</script>

<style lang="scss" scoped>
.header-userInfo{
  .el-dropdown{
    .avatarBox{
      display: flex;
      flex-direction:column;
      align-items: center;
      cursor: pointer;
      font-size: 12px;
      & > span{
        margin-top: 1px;
      }
    }
  }
}
</style>
