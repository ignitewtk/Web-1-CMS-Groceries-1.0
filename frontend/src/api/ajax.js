// 能发送异步ajax请求的函数模块
// 封装axios库
// 函数的返回值是promise对象
// 优化：统一处理请求异常
// 在外层包一个自己创建的promis对象
// 在请求出错时，不去reject，而是显示错误提示

import { message } from 'antd'
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
    

    // if(type === 'GET') {
    //     // 发GET请求
    //     return axios.get(urll, {
    //         // 指定请求参数
    //         params: data
    //     })
    // } else {
    //     // 发POST请求
    //     return axios.post(url, data)
    // }


    // 执行器
    return new Promise((resolve, reject) => {
        let promise
        // 执行异步ajax请求
        if(type === 'GET') {
            // 发GET请求
            promise = axios.get(url, {
                // 指定请求参数
                params: data
            })
        } else {
            // 发POST请求
            promise = axios.post(url, data)
        }
        // 如果成功了，调用resolve
        promise.then(response => {
            resolve(response)

            // 如果失败了，不调用reject(reason)，而是提是异常信息
        }).catch(error => {
            message.error('请求出错：', + error.message)
        })
    })

    
}