<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="cs-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${ item.field }`]"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" v-model="formData[`${ item.field }`]">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                  {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" v-model="formData[`${ item.field }`]"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineEmits } from "vue";
import { IFormItem } from "../types";

const props = defineProps({
  //父组件给子组件传值时，
  // 没用使用名字而是使用v-model，
  // 则子组件接收时默认名字为modelValu
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as () => IFormItem[],
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '5px 40px' })
  },
  colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
  }
})
const formData = ref({...props.modelValue})
const emit = defineEmits(['update:modelValue'])
watch(formData, (newValue) => {
  emit('update:modelValue', newValue)
},{
  deep: true
})
</script>

<style lang="scss" scoped>
.cs-form{
  padding-top: 22px;
  margin: 15px 0;
  background-color: #fff;
}
</style>
