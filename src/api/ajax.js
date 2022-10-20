// 能发送异步ajax请求的函数模块
// 封装axios库
// 函数的返回值是promise对象
// 优化：统一处理请求异常
// 在外层包一个自己创建的promis对象
// 在请求出错时，不去reject，而是显示错误提示

import axios from 'axios'

export default function ajax(url, data={}, type='GET', responseType='json') {
    
    let promise

    if(type === 'GET') {
        // 发GET请求
        promise = axios.get(url, {
            params: data // 指定请求参数
        })
    } else if (type === 'POST') {
        promise = axios.post(url, data)
    }
    return promise

    // 错误代码，无法获得返回值，async和await已经添加在ajax里了
    // return new Promise(async (resolve, reject) => {
    //     let promise

    //     if(type === 'GET') {
    //         // 发GET请求
    //         promise = await axios.get(url, {
    //             params: data // 指定请求参数
    //         })
    //     } else if (type === 'POST') {
    //         promise = await axios.post(url, data)
    //     }
    //     return promise
    // })

}

// upload image
function doUpload(){
    ajax({
        url: 'http://localhost:3000/upload-single',
        type: 'POST',
        cache: false,
        data: new FormData(),
        processData: false, // necessary
        contentType: false, // necessary
        success: function(data) {
            console.log(data)
            if(data.err == 0) {
                console.log("Upload Success.")
                // set <img> src 'http://localhost:3000' + '/img/xxx.jpg'
            } else {
                alert('Upload failed.')
            }
        }
    }) }