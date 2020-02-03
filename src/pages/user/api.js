import request from 'src/app/util/request'

// 获取用户列表
export const getUserList = params => request.get('/user/list', params)
