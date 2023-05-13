import { IForm } from "@/components/base-ui/form";
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名',
      rules: [],
      placeholder: '请输入商品名称'
    },
    {
      field: 'price',
      type: 'input',
      label: '商品价格',
      rules: [],
      placeholder: '请输入价格'
    },
    {
      field: 'amount',
      type: 'input',
      label: '库存',
      rules: [],
      placeholder: '请输入真实姓名数量'
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
  ],
  colLayout: {
    span: 24
  }
}
