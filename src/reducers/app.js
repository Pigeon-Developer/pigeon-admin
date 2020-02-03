const initState = {
  breadcrumbNameMap: {
    '/user': '用户模块',
    '/user/list': '用户列表',
  },
  menuItems: [
    {
      name: 'Dashboard',
      key: 'dashboard',
      icon: 'home',
      link: '/',
    },
    {
      name: '用户模块',
      key: 'userModule',
      icon: 'user',
      link: '/user',
    },
  ],
  loginInfo: {},
}

const app = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        loginInfo: {
          ...action.payload,
        },
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default app
