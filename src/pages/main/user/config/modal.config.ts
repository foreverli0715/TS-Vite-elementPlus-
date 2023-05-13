import { IForm } from "@/components/base-ui/form";
export const modalConfig: IForm = {
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
      label: '手机号码',
      rules: [],
      placeholder: '请输入手机号码'
    },
    {
      field: 'realName',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名'
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
      field: 'email',
      type: 'input',
      label: '电子邮箱',
      rules: [],
      placeholder: '请输入邮箱号'
    }
  ],
  colLayout: {
    span: 24
  }
}
