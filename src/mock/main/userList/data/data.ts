import Mock from 'mockjs'

export let userList = Mock.mock({
  'items|50': [{
    'id|+1': 1,
    'name': '@last',
    'realName': '@cname',
    'status|0-1': 1,
    'email': '@email',
    'cellphone': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    'createAt': '@datetime'
  }]
})

