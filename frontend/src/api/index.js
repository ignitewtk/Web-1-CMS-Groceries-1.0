// 根据接口文档定义接口请求
// 包含应用中所有的接口请求函数的模块
// 每个函数返回值都是promise

import ajax from './ajax'
// Login
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

// Add users
export const reqAddUser = (user) => ajax('/users/add', user, 'POST')

// Upload file
export const reqAddFile = (files) =>  ajax('/files/add', files, 'POST')
