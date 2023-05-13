<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="../../public/vite.svg" alt="logo">
      <span v-if="!collapse" class="title">Management System</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      text-color="#fff"
      :default-active="$route.path"
      :collapse="collapse"
      :router="true"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon :size="20" v-if="item.icon">
	              <component :is="item.icon" />
	            </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.url">
                <el-icon :size="20" v-if="subitem.icon">
                  <component :is="subitem.icon" />
                </el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.url">
              <el-icon :size="20" v-if="item.icon">
                  <component :is="item.icon" />
              </el-icon>
              <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login';
import { computed } from 'vue';

const userMenus = computed(() => {
  return userLoginStore().userMenu
})

const foldProp = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped lang="scss">
.nav-menu{
  height: 100%;
  background-color: #001529;
  .logo{
    display: flex;
    height: 30px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img{
      height: 100%;
      margin: 0 5px;
    }
    .title{
      font-size: 15px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu{
    border-right: none;
    border-right: none;
  }
}
</style>
