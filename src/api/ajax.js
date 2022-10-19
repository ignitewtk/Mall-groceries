// 能发送异步ajax请求的函数模块
// 封装axios库
// 函数的返回值是promise对象
// 优化：统一处理请求异常
// 在外层包一个自己创建的promis对象
// 在请求出错时，不去reject，而是显示错误提示

import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
    return new Promise(async (resolve, reject) => {
        let promise

        if(type === 'GET') {
            // 发GET请求
            promise = await axios.get(url, {
                params: data // 指定请求参数
            })
        } else if (type === 'POST') {
            promise = await axios.post(url, data)
        }
        return promise

    })
}

