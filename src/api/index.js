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






// Product
// 
/* Get product list
    param: {
        categories: <string>,
        rating: <int>,
        price: <double>,
    }
    return: Promise object
*/
export const reqGetProducts = (param) => ajax('/products', param, 'POST')

// Upload file
// export const reqAddFile = (files) =>  ajax('/files/add', files, 'POST')



