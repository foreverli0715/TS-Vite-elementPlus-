import { IForm } from "@/components/base-ui/form";
export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {
    padding: '10px'
  },
  formItems: [
    {
      field: 'orderId',
      type: 'input',
      label: '订单编号',
      rules: [],
      placeholder: '请输入订单编号'
    },
    {
      field: 'location',
      type: 'input',
      label: '地址',
      rules: [],
      placeholder: '请输入地址'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '异常', value: 2 },
        { title: '已完成', value: 1 },
        { title: '未完成', value: 0 },
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
