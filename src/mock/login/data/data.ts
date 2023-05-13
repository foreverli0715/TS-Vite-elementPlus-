// 用户信息
export const userList = [
  {
    id: 1,
    name: "zhoucs",
    realname: "zcs",
    cellphone: "13713833649",
    avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    roleName: "超级管理员",
    roleIntro: "所有权限",
    createAt: "2023-01-01",
    role: {
      id: 1,
      name: "超级管理员",
      intro: "所有权限",
      createAt: "2023-01-01",
      updataAt: "2023-01-01"
    }
  },
  {
    id: 2,
    name: "rooter",
    realname: "ccl",
    cellphone: "18825213892",
    avatar: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    roleName: "普通管理员",
    roleIntro: "一般权限",
    createAt: "2023-05-01",
    role: {
      id: 2,
      name: "普通管理员",
      intro: "一般权限",
      createAt: "2023-05-01",
      updataAt: "2023-05-01"
    }
  }
]

// 菜单权限
export const userRoleMenu = [
  {
    id: 1,
    role: 1,
    name: "工作台",
    type: 2,
    url: "/main/system",
    sort: 2,
    icon: "Monitor"
  },
  {
    id: 2,
    role: 1,
    url: "/main/grade",
    name: "权限管理",
    type: 1,
    sort: 3,
    icon: "Iphone",
    children: [
      {
        id: '2-1',
        url: "/main/grade/grader",
        name: "管理员信息",
        type: 2,
      }
    ]
  },
  {
    id: 3,
    role: 1,
    url: "/main/user",
    name: "用户管理",
    type: 1,
    sort: 4,
    icon: "Coin",
    children: [
      {
        id: '3-1',
        url: "/main/user/userList",
        name: "用户列表",
        type: 2
      },
      {
        id: '3-2',
        url: "/main/user/userAnalyse",
        name: "用户数据分析",
        type: 2
      }
    ]
  },
  {
    id: 4,
    role: 1,
    url: "/main/commodity",
    name: "商品管理",
    type: 1,
    sort: 5,
    icon: "Key",
    children: [
      {
        id: '4-1',
        url: "/main/commodity/commodityList",
        name: "商品列表",
        type: 2
      },
      {
        id: '4-2',
        url: "/main/commodity/brandStory",
        name: "品牌故事",
        type: 2
      }
    ]
  },
  {
    id: 5,
    role: 1,
    url: "/main/order",
    name: "订单管理",
    type: 1,
    sort: 6,
    icon: "Memo",
    children: [
      {
        id: '5-1',
        url: "/main/order/orderList",
        name: "订单列表",
        type: 2
      }
    ]
  },
  {
    id: 1,
    role: 2,
    name: "工作台",
    type: 2,
    url: "/main/system",
    sort: 2,
    icon: "Monitor"
  },
  {
    id: 3,
    role: 2,
    url: "/main/user",
    name: "用户管理",
    type: 1,
    sort: 4,
    icon: "Coin",
    children: [
      {
        id: '3-1',
        url: "/main/user/userList",
        name: "用户列表",
        type: 2
      },
      {
        id: '3-2',
        url: "/main/user/userAnalyse",
        name: "用户数据分析",
        type: 2
      }
    ]
  },
  {
    id: 4,
    role: 2,
    url: "/main/commodity",
    name: "商品管理",
    type: 1,
    sort: 5,
    icon: "Key",
    children: [
      {
        id: '4-1',
        url: "/main/commodity/commodityList",
        name: "商品列表",
        type: 2
      },
      {
        id: '4-2',
        url: "/main/commodity/brandStory",
        name: "品牌故事",
        type: 2
      }
    ]
  },
  {
    id: 5,
    role: 2,
    url: "/main/order",
    name: "订单管理",
    type: 1,
    sort: 6,
    icon: "Memo",
    children: [
      {
        id: '5-1',
        url: "/main/order/orderList",
        name: "订单列表",
        type: 2
      }
    ]
  }
]
