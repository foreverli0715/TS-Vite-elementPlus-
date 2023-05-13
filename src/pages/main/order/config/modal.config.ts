import { IForm } from "@/components/base-ui/form";
export const modalConfig: IForm = {
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
      placeholder: '请输入下单地址'
    },
    {
      field: 'status',
      type: 'select',
      label: '订单状态',
      placeholder: '请选择订单状态',
      options: [
        { title: '异常', value: 2 },
        { title: '已完成', value: 1 },
        { title: '未完成', value: 0 },
      ]
    },
  ],
  colLayout: {
    span: 24
  }
}
