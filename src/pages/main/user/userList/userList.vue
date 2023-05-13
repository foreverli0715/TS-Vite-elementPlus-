<template>
  <div class="user-list">
    <CsForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-button">
          <el-button color="#cdcdcd" :dark="isDark" :icon="Refresh" @click="handlerReset">重置</el-button>
          <el-button color="#ff4b2b" :dark="isDark" :icon="Search" @click="handlerSearch">搜索</el-button>
        </div>
      </template>
    </CsForm>
    <CsTable :tableData="tableAlterData" :propList="propList">
      <template #status="scope">
        <el-button v-if="scope.row.status === 1" size="small" color="#626aef" :dark="isDark">启用</el-button>
        <el-button v-if="scope.row.status === 0" size="small" type="danger" :dark="isDark">禁用</el-button>
      </template>
      <template #handler="scope">
        <el-button color="#626aef" :dark="isDark" @click="handlerEdit(scope.row)">编辑</el-button>
        <el-button color="#ff4b2b" :dark="isDark" @click="handlerDelete(scope.row)">删除</el-button>
      </template>
      <template #header>
        <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px 35px 10px 20px;">
          <div style="font-size: 18px;font-weight: 800;">用户列表</div>
          <div class="handler">
            <el-button color="#ff4b2b" :dark="isDark" @click="handlerNew">新增用户</el-button>
          </div>
        </div>
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
    <pageModal
      ref="pageModalRef"
      :modal-config="modalConfig"
      :defaultEditInfo="defaultEditInfo"
      :defaultUrl="defaultUrl"
      @getTableData="getTableData"
    >
    </pageModal>
  </div>
</template>

<script setup lang="ts">
import CsForm from '@/components/base-ui/form';
import CsTable from '@/components/base-ui/table'
import pageModal from '@/components/userList/cmps/page-modal.vue';
import { modalConfig } from "../config/modal.config";
import { onMounted, ref } from "vue";
import { searchFormConfig } from "../config/search.config";
import { useDark } from '@vueuse/core'
import { Search, Refresh } from '@element-plus/icons-vue'
import { userListByTableRequest, userListBySearchRequest, userListByDeleteRequest } from "@/http/main/user/user";
import { propList } from "../config/userList.config";
import { useDebounceFn } from '@vueuse/core'
import type { Action } from 'element-plus'

const isDark = useDark()
// const toggleDark = useToggle(isDark)
const tableData = ref()
const page = ref(1)
const size = ref(10)
const total = ref<number>()
const tableAlterData = ref<Array<any>>([])
const pageModalRef = ref<InstanceType<typeof pageModal> | null>(null)
const defaultEditInfo = ref({})
const defaultUrl = ref({
  userItemEdit: '/user/userItemEdit',
  userItemNew: '/user/userItemNew'
})

const formData = ref<any>({
  name: '',
  cellphone: '',
  email: '',
  realName: '',
  status: '',
  createAt: ''
})

const getTableData = async () => {
  const getTableDataValue = await userListByTableRequest()
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

const handlerReset = useDebounceFn(() => {
  const formOriginData: any = {
    name: '',
    cellphone: '',
    email: '',
    realName: '',
    status: ''
  }
  for(const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  page.value = 1
  getTableData()
})

const handlerSearch = useDebounceFn(async () => {
  const getFormSearchValue =  await userListBySearchRequest(formData.value)
  tableData.value = getFormSearchValue.data
  total.value = getFormSearchValue.data.length
  getTableAlterData()
})

const handlerDelete = (itemValue: any) => {
  ElMessageBox.alert('删除后将无法恢复，是否确认？', '提示', {
    confirmButtonText: '确认',
    callback: async (action: Action) => {
      if(action == 'confirm') {
        const getTableItemValue = await userListByDeleteRequest(itemValue)
        if(getTableItemValue.code == 0) {
          ElMessage({
            message: getTableItemValue.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getTableItemValue.message)
        }
        getTableData()
      }else if(action == 'cancel') {
        return
      }
    }
  })
}

const handlerEdit = (item: any) => {
  defaultEditInfo.value = { ...item }
  if(pageModalRef.value){
    pageModalRef.value.centerDialogVisible = true
  }
}

const handlerNew = () => {
  defaultEditInfo.value = {}
  if(pageModalRef.value){
    pageModalRef.value.centerDialogVisible = true
  }
}

onMounted(() => {
  getTableData()
})
</script>

<style lang="scss" scoped>
.user-list{
  width: 97%;
  margin: 0 auto;
  .handle-button{
    text-align: right;
    padding: 10px;
  }
}
</style>
