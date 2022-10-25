import React from "react";
import { Row, Col, Button } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import  { useSelector, useDispatch } from 'react-redux'
import { addOneToCount, addItem, reduceItem, deleteItem, selectCartList, selectCount } from '../../redux/cartSlice'

import productImage from '../product/img/Creamy Potato.jpg'

function CartItem(props) {
    
    const dispatch = useDispatch()
    const cartList = useSelector(selectCartList)

    function addOne() {
        dispatch(addItem({
            id: props.productName,
            productName: props.productName,
            price: props.price,
            count: 1,
            src: props.src }))}

    function reduceOne() {
        dispatch(reduceItem({
            id: props.productName,
            productName: props.productName }))}

    function removeItem() {
        dispatch(deleteItem({
            id: props.productName,
            productName: props.productName }))}

    return (
        <div style={{ display: "flex", margin:"20px 0"}}>
            <img style={{ height:"70px", width:"70px", margin:"0px 10px 0 0"}} src={props.src}/>
            <div>
                <div> {props.productName} </div>
                <div> $ {props.price} </div>
                <Button onClick={addOne}> + </Button>
                <span> {props.count} </span>
                <Button onClick={reduceOne}> - </Button>
                <Button onClick={removeItem}> <DeleteOutlined /> </Button>
            </div>
        </div>
    )
}

export default CartItem