import React from "react";
import { Row, Col, Button } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import  { useSelector, useDispatch } from 'react-redux'
import { addOneToCount, addItem, deleteItem, selectCartList, selectCount } from '../../redux/cartSlice'

import productImage from '../product/img/Creamy Potato.jpg'

function CartItem(props) {
    
    const dispatch = useDispatch()
    const cartList = useSelector(selectCartList)


    return (
        <div style={{ display: "flex", margin:"20px 0"}}>
            <img style={{ height:"70px", width:"70px", margin:"0px 10px 0 0"}} src={productImage}/>
            <div>
                <div> {props.productName} </div>
                <div> $ {props.price} </div>
                <Button> + </Button>
                <span> {props.count} </span>
                <Button> - </Button>
                <Button> <DeleteOutlined /> </Button>
            </div>
        </div>
    )
}

export default CartItem