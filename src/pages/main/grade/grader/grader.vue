<template>
  <div class="grader-list">
    <CsTable :tableData="tableAlterData" :propList="propList">
      <template #status="scope">
        <el-button v-if="scope.row.status === 1" size="small" color="#626aef">账号正常</el-button>
        <el-button v-if="scope.row.status === 0" size="small" type="danger">账号异常</el-button>
      </template>
      <template #header>
        <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px 35px 10px 20px;">
          <div style="font-size: 18px;font-weight: 800;">管理员列表</div>
        </div>
      </template>
      <template #handler="scope">
        <el-button color="#626aef" disabled>编辑</el-button>
        <el-button color="#ff4b2b" disabled>删除</el-button>
      </template>
      <template #footer>
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="page"
          :page-size="size"
        />
      </template>
    </CsTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CsTable from '@/components/base-ui/table';
import { propList } from "../config/gradeList.config";
import { userAllInfoByRuquest } from "@/http/main/grade/grade";

const page = ref(1)
const size = ref(10)
const total = ref<number>()
const tableData = ref()
const tableAlterData = ref<Array<any>>([])

const getTableData = async () => {
  const getTableDataValue = await userAllInfoByRuquest()
  tableData.value = getTableDataValue.data
  total.value = getTableDataValue.total
  getTableAlterData()
}

const getTableAlterData = () => {
  tableAlterData.value = tableData.value.slice(
    (page.value - 1) * size.value,
    page.value * size.value
  )
}

const currentChange = (value: number) => {
  page.value = value
  getTableAlterData()
}

const sizeChange = (value: number) => {
  size.value = value
  page.value = 1
  getTableAlterData()
}

onMounted(() => {
  getTableData()
})
</script>

<style lang="scss" scoped>
.grader-list{
  width: 98%;
  margin: 10px auto;
  background-color: #fff;
}
</style>
