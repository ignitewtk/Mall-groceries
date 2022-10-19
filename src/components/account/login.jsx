import React, {Component} from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons'
// import './login.less'
import './login.css'
import logo from './images/logo2.jpg'
import authGoogle from './auth'
import { googleSignout } from './auth'

// import { reqLogin } from '../../api'

function func() {
    console.log('testtest')
}

export default class Login extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = props.form['username'];
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleSubmit = (event) => {
        // 阻止事件的默认行为
        // event.preventDefault();
        // const form = this.props.form
        // const values = form.getFieldsValues()
        alert("you click");
    }

    // 自定义验证
    validateEmail = (rule, values) => {
        if(!values) {
            return Promise.reject(new Error("Error: Email should not be empty."));
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(values)) {
            return Promise.reject(new Error("Error: Wrong email content"));
        } else {
            return Promise.resolve("Success");
        }
    }
    
    // Async Await
    validateEmail = async (rule, values) => {
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

    render () {
        return (
        <div className="login" style={{height:"60vh"}}> 
             {/* <header className="login-header">
                <img src={logo} alt=""></img>
                <h1> Onsys Message System </h1>
             </header> */}
             <section className="login-content">
                <h2> Account </h2>
                
                <Form onFinish={this.handleSubmit} className="login-form"> 
                    <Form.Item name="username" rules={[{ required: true}]}>
                        {
                            <Input
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='Username'>
                            </Input>
                        }
                    </Form.Item>
                    <Form.Item 
                        name="password" 
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
                        // 自定义验证
                        rules={[
                            ({getFieldValue}) => ({validator: this.validateEmail})
                        ]}>
                        <Input prefix={<MailOutlined />} placeholder="Email"></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' className='login-form-button'>Sign In</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' className='login-form-button'>Sign Up</Button>
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
    
}

