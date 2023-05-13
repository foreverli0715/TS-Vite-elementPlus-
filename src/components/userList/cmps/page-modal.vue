<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="用户详情"
      width="30%"
      align-center
      :destroy-on-close="true"
    >
    <CsForm v-bind="modalConfig" v-model="formEditData">
    </CsForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button color="#cdcdcd" @click="centerDialogVisible = false">取消</el-button>
          <el-button color="#626aef" @click="handlerConfirm">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import CsForm from '@/components/base-ui/form';
import { userListByEditRequest, userListByNewRequest } from "@/http/main/user/user";
import { commodityListByEditRequest, commodityListByNewRequest } from "@/http/main/commodity/commodity";
import { orderListByEditRequest, orderListByNewRequest } from "@/http/main/order/order";

const centerDialogVisible = ref(false)
// 使用 <script setup> 语法糖的组件，其内部属性是不能被其他组件访问到的
// 需要使用 defineExpose 将属性暴露出去
// 在不使用<script setup>的情况下，可以用 InstanceType 获取组件实例类型
defineExpose({
  centerDialogVisible
})
const emit = defineEmits(['getTableData'])
const formEditData = ref<any>({})
const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultEditInfo: {
    type: Object,
    default: () => ({})
  },
  defaultUrl: {
    type: Object,
    default: () => ({})
  }
})

watch(
  () => props.defaultEditInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formEditData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)

const handlerConfirm = async () => {
  if(Object.keys(props.defaultEditInfo).length) {
    // 编辑
    if (props.defaultUrl.userItemEdit == '/user/userItemEdit') {
      const getEditData = await userListByEditRequest( props.defaultEditInfo.id, formEditData.value, props.defaultUrl.userItemEdit )
      if(getEditData.code == 0) {
          ElMessage({
            message: getEditData.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getEditData.message)
        }
      emit('getTableData')
    }
    if (props.defaultUrl.userItemEdit == '/commodity/commodityItemEdit') {
      const getEditData = await commodityListByEditRequest( props.defaultEditInfo.id, formEditData.value, props.defaultUrl.userItemEdit )
      if(getEditData.code == 0) {
          ElMessage({
            message: getEditData.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getEditData.message)
        }
      emit('getTableData')
    }
    if (props.defaultUrl.userItemEdit == '/order/orderItemEdit') {
      const getEditData = await orderListByEditRequest( props.defaultEditInfo.id, formEditData.value, props.defaultUrl.userItemEdit )
      if(getEditData.code == 0) {
          ElMessage({
            message: getEditData.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getEditData.message)
        }
      emit('getTableData')
    }
  }else{
    //新增
    if(props.defaultUrl.userItemNew == '/user/userItemNew') {
      const getNewData = await userListByNewRequest( formEditData.value, props.defaultUrl.userItemNew )
      if(getNewData.code == 0) {
          ElMessage({
            message: getNewData.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getNewData.message)
        }
      emit('getTableData')
    }
    if(props.defaultUrl.userItemNew == '/commodity/commodityItemNew') {
      const getNewData = await commodityListByNewRequest( formEditData.value, props.defaultUrl.userItemNew )
      if(getNewData.code == 0) {
          ElMessage({
            message: getNewData.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getNewData.message)
        }
      emit('getTableData')
    }
    if(props.defaultUrl.userItemNew == '/order/orderItemNew') {
      const getNewData = await orderListByNewRequest( formEditData.value, props.defaultUrl.userItemNew )
      if(getNewData.code == 0) {
          ElMessage({
            message: getNewData.message,
            type: 'success',
          })
        }else {
          ElMessage.error(getNewData.message)
        }
      emit('getTableData')
    }
  }
  centerDialogVisible.value = false
}
</script>

<style scoped>

</style>
