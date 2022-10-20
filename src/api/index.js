// 根据接口文档定义接口请求
// 包含应用中所有的接口请求函数的模块
// 每个函数返回值都是promise

import ajax from './ajax'


// Account

/* Login
    param: {
        username: <string>,
        password: <string>
    }
    return: Promise object
*/
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

/* Login
    param: {
        username: <string>,
        password: <string>,
        email: <string>,
    }
    return: Promise object
*/
export const reqRegister = (username, passowrd, email) => ajax('/register', {username, passowrd, email}, 'POST')


// Add users
export const reqAddUser = (user) => ajax('/users/add', user, 'POST')


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
export const reqGetProfileImage = (param) => ajax('/account/profileImage', param, 'POST')



/* Get product list
    url: '/product/list'      
    param: {
        categories: <string>,
        rating: <int>,
        price: <double>,
    }
    return: Promise object with a list of products' data. 
    {
        data: [
            ...
            {
                name: <string>,
                category: <string>,
                originPrice: <double>,
                discountPrice: <double>,
                rating: <double>,
                img: <?>,
            }
        ]
    }
*/
export const reqGetProducts = (param) => ajax('/product/list', param, 'POST')

export const reqGetImage = (param) => ajax('/product/image', param, 'POST')


// Upload file
// export const reqAddFile = (files) =>  ajax('/files/add', files, 'POST')



