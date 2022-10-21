import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons'
// import './login.less'
import './login.css'
import authGoogle from './auth'
import { googleSignout } from './auth'
import { reqRegister } from '../../api'
import  { useSelector, useDispatch } from 'react-redux'
import { setUserName, setPassword, setEmail, selectUserName, selectPassword, selectEmail } from '../../redux/accountSlice'


function func() {
    console.log('testtest')
}

function Register() {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const password = useSelector(selectPassword)
    const email = useSelector(selectEmail)

    function handleLoginSubmit(e)  {
        // 阻止事件的默认行为
        // event.preventDefault();
        // const form = this.props.form
        // const values = form.getFieldsValues()
        // dispatch(setLogin({userName, password}))
        reqRegister({
            // userName: 'customer3',
            // password: 'customer3',
            // email: 'customer3'
            userName: userName,
            password: password,
            email: email
        }).then(response => {
            console.log("return register:", response.data)
        }).catch((error) => {
            console.log("return register error", error)
        })
        
        // alert("you click");
    }

    // 自定义验证
    function validateEmail(rule, values) {
        if(!values) {
            return Promise.reject(new Error("Error: Email should not be empty."));
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(values)) {
            return Promise.reject(new Error("Error: Wrong email content"));
        } else {
            return Promise.resolve("Success");
        }
    }
    
    // Async Await
    async function validateEmail (rule, values) {
        if(!values) {
            return Promise.reject(new Error("Error: Email should not be empty."));
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(values)) {
            return Promise.reject(new Error("Error: Wrong email content"));
        } else {
            // return Promise.resolve("Success");
            const {username, password} = values
            // const response = await reqLogin(username, password)
            // console.log('请求成功', response.data)
            
        }
    }
    return (
    <div className="login" style={{height:"60vh"}}> 
            {/* <header className="login-header">
            <img src={logo} alt=""></img>
            <h1> Onsys Message System </h1>
            </header> */}
            <section className="login-content">
            <h2> Register </h2>
            
            <Form 
                // onFinish={handleLoginSubmit} 
                className="login-form"> 
                <Form.Item 
                    name="username" 
                    onChange={(e) => {dispatch(setUserName(e.target.value))}}
                    rules={[{ required: true}]}>
                    {
                        <Input
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder='Username'>
                        </Input>
                    }
                </Form.Item>
                <Form.Item 
                    name="password" 
                    onChange={(e) => {dispatch(setPassword(e.target.value))}}
                    // 声明式验证
                    rules={[
                        {required: true, message: "Password is required."},
                        {max: 12, message: "Password length is 12 at most."},
                        {min: 4, message: "Password length is 4 at least."},
                        {pattern: /^[a-zA-Z0-9_]+$/, message: "Password should include letters, digits and underscores."}
                        ]}>
                    <Input 
                        prefix={<LockOutlined />}
                        type="password" placeholder='Password'></Input>
                </Form.Item>
                <Form.Item 
                    name="email" 
                    onChange={(e) => {dispatch(setEmail(e.target.value))}}
                    // 自定义验证
                    rules={[
                        ({getFieldValue}) => ({validator: validateEmail})
                    ]}>
                    <Input prefix={<MailOutlined />} placeholder="Email"></Input>
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleLoginSubmit} 
                        type="primary" htmlType='submit' className='login-form-button'>Sign Up</Button>
                </Form.Item>
            </Form>

            <div>
                <div> Other Auth </div>
                <div>
                    <Button onClick={authGoogle}>Google</Button>
                    <button onClick={func}>Facebook</button>
                    <Button>Github</Button>
                </div>
            </div>
            </section>
    </div>)
    
    
}


export default Register;
