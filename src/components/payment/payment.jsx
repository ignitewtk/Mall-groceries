
import React from "react"
import { Row, Col, Button, Form, Input } from 'antd'

import 'antd/dist/antd.css'
import  { useSelector, useDispatch } from 'react-redux'
import { MailOutlined} from '@ant-design/icons'
import PaymentInfo from './PaymentInfo'
import CartPreview from './CartPreview'

function Payment(props) {

    return (
        <Row >
            <Col span={12}> <CartPreview /> </Col>
            <Col span={12}> <PaymentInfo /> </Col>
        </Row>
    )
    
}



export default Payment;
