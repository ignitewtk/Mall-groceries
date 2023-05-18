
import React from "react"
import { Row, Col, Button, Form, Input } from 'antd'

import 'antd/dist/antd.css'
import  { useSelector, useDispatch } from 'react-redux'
import { MailOutlined} from '@ant-design/icons'

function Payment(props) {

    return (
        <Row>
            <Col span={12}> Cart List </Col>
            <Col span={12}> <PaymentInfo /> </Col>
        </Row>
    )
    
}

function PaymentInfo(props) {

    const dispatch = useDispatch()

    function validateEmail(rule, values) {
        if(!values) {
            return Promise.reject(new Error("Error: Email should not be empty."));
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(values)) {
            return Promise.reject(new Error("Error: Wrong email content"));
        } else {
            return Promise.resolve("Success");
        }
    }

    return (
        <div>
            <Row>
                <Col span={6}> <Button >G Pay</Button></Col>
                <Col span={6}> <Button> Pay with Link </Button></Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form>
                        <Form.Item 
                            name="email" 
                            // 自定义验证
                            rules={[
                                ({getFieldValue}) => ({validator: validateEmail})
                            ]}>
                            <Input prefix={<MailOutlined />} placeholder="Email"></Input>
                        </Form.Item>
                        <label> Card information </label>
                        <Form.Item name="Expired date">
                            <Input prefix={<MailOutlined />} placeholder="Expired date"></Input>
                        </Form.Item>
                        <Form.Item name="CVV">
                            <Input prefix={<MailOutlined />} placeholder="CVV"></Input>
                        </Form.Item>
                        <label> Name on Card </label>
                        <Form.Item name="Name On Card">
                            <Input prefix={<MailOutlined />} placeholder="Name On Card"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType='submit' className='login-form-button'> Pay </Button>
                        </Form.Item>
                        <p> Not withstanding the logo displayed aobve, when paying with a 
                            co-branded eftpos debit card, your payment may be proceesed 
                            through either card network.</p>
                        <p> By confirming your payment, you allow us to charge your Card
                            for this payment and future payments in accordance with their 
                            terms.</p>
                    </Form>
                </Col>
                
            </Row>
        </div>
    )
}

export default Payment;
