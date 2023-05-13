<template>
  <div class="nav-header">
    <div class="fold-icon" @click="handleFoldChange">
      <el-icon size="25">
        <component :is="isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div>
        <CsBreadcrumb  :breadcrumbs="breadcrumbs"/>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;">
        <HeaderUserInfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from "vue";
import { useRoute, useRouter } from "vue-router";
import userLoginStore from '@/store/login/login'
import HeaderUserInfo from "./header-userInfo.vue";
import { pathMapToBreadcrumb } from "@/utils/map-menus";
import CsBreadcrumb from "./base-ui/breadcrumb";

const isFold = ref(false)

const breadcrumbs = computed(() => {
  return pathMapToBreadcrumb(userLoginStore().userMenu,useRoute().path)
})

//事件总线控制菜单是否折叠
const emitHandleFold = defineEmits(['foldValueChange'])

const handleFoldChange = () => {
  isFold.value = !isFold.value
  emitHandleFold('foldValueChange', isFold.value)
}



</script>

<style lang="scss" scoped>
.nav-header{
  width: 100%;
  display: flex;
  .fold-icon{
    cursor: pointer;
    margin-top: 8px;
    &:active{
      transform: scale(0.75);
    }
  }
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding-left: 10px;
  }
}
</style>
