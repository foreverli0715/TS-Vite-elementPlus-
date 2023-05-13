import Mock from 'mockjs'

export let orderList: any = Mock.mock({
  'items|15': [{
    'id|+1': 1,
    'orderId': '@guid',
    'location': '@county(true)',
    'status|0-2': 1,
    'createAt': '@datetime'
  }]
})
