import { IForm } from "@/components/base-ui/form";
export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {
    padding: '10px'
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      rules: [],
      placeholder: '请输入商品名称'
    },
    {
      field: 'coding',
      type: 'input',
      label: '商品编码',
      rules: [],
      placeholder: '请输入编码'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '上架', value: 1 },
        { title: '下架', value: 0 },
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        type: 'date',
        placeholder: "请选择创建时间",
        clearable: false,
        valueFormat: "YYYY-MM-DD"
      }
    }
  ]
}
