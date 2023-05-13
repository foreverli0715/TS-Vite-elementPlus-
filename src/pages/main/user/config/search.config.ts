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
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号',
      rules: [],
      placeholder: '请输入手机账号'
    },
    {
      field: 'realName',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入姓名'
    },
    {
      field: 'status',
      type: 'select',
      label: '账号状态',
      placeholder: '请选择账号状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 },
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
    },
    {
      field: 'email',
      type: 'input',
      label: '电子邮箱',
      rules: [],
      placeholder: '请输入邮箱号'
    }
  ]
}
