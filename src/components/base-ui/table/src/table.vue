<template>
  <div class="cs-table">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <!-- <el-table-column  type="index" label="序号" width="80" align="center"></el-table-column> -->
      <template v-for="(propItem) in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" style="display: flex;justify-content:right;padding: 10px;">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { ITableColumn } from "../types";


const props = defineProps({
  propList: {
    type: Array as () => ITableColumn[],
    default: () => []
  },
  tableData: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.cs-table{
  margin-bottom: 10px;
  background-color: #fff;
}
</style>
