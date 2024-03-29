// 根据接口文档定义接口请求
// 包含应用中所有的接口请求函数的模块
// 每个函数返回值都是promise

import ajax from './ajax'

/*
服务器 "proxy": "https://backend202307112242.azurewebsites.net",
本地 "proxy": "https://localhost:3050",
*/

var BASE = ''

export const testPostApi = (param) => ajax(BASE + '/apiTest', param, 'POST')
export const testGetApi = () => ajax(BASE + '/apiTest', {}, 'GET')
export const testGetWebApp = () => ajax(BASE + '/webapp/page1', {}, 'GET')

// Account

/* Login
    param: {
        username: <string>,
        password: <string>
    }
    return: Promise object
*/
export const reqLogin = (param) => ajax(BASE + '/customer/login', param, 'POST')


/* Register
    param: {
        username: <string>,
        password: <string>,
        email: <string>,
    }
    return: Promise object
*/
export const reqRegister = (param) => ajax(BASE + '/customer/register', param, 'POST')


/* Get profile image
    url: '/account/profileImage'      
    param: {
        fileName: <string>
    }
    return: Promise object with a list of products' data. 
    {
        url: <string> the image URL on server
    }
*/
export const reqGetProfileImage = (param) => ajax(BASE + '/customer/profileImage', param, 'POST')



// Product
/* Get product list
    url: '/product/list'      
    param: {
        categories: <string>,
        rating: <double>,
        price: <double>,
    }
    return: Promise object with a list of products' data. 
    {
        data: [
            ...
            {
                productName: <string>,
                category: <string>,
                originPrice: <double>,
                discountPrice: <double>,
                rating: <double>,
                img: <?>,
            }
        ]
    }
*/
export const reqGetProductList = (param) => ajax(BASE + '/product/list', param, 'POST')

export const reqGetImage = (param) => ajax(BASE + '/product/image', param, 'POST')

export const reqGetList = () => ajax(BASE + '/product/plist', {}, 'GET')


// Upload file
// export const reqAddFile = (files) =>  ajax('/files/add', files, 'POST')



