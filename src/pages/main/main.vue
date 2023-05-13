<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '220px'">
        <navMenu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <navHeader @foldValueChange="foldChange"/>
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import navHeader from '@/components/nav-header.vue';
import navMenu from '@/components/nav-menu.vue';
import { ref } from 'vue';

const isCollapse = ref(false)
const foldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="scss">
.main{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .main-container{
    height: 100%;
    .el-aside{
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
    }
    .page{
      height: 100%;
      .el-header{
        display: flex;
        color: #333;
        align-items: center;
      }
      .el-main{
        color: #333;
        text-align: center;
        background-color: #f0f2f5;
        height: calc(100% - 48px);
        padding: 0;
      }
    }
  }
}

</style>
