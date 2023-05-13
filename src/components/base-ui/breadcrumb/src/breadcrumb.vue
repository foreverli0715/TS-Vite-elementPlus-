<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path ?? ''}">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IBreadcrumb } from "../types";

defineProps({
  breadcrumbs: {
    type: Array as () => IBreadcrumb[]
  }
})
</script>

<style scoped>

</style>
