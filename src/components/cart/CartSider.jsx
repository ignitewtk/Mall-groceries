import React from "react";
import { Row, Col, Button } from 'antd'
import  { useSelector, useDispatch } from 'react-redux'
import { addOneToCount, addItem, deleteItem, selectCartList, selectCount, selectTotalPrice } from '../../redux/cartSlice'
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'

import './Cart.css';
import { CartProducts } from './dataCart'


function CartSider(props) {

    const dispatch = useDispatch()
    const cartList = useSelector(selectCartList)
    const count = useSelector(selectCount)
    const totalPrice = useSelector(selectTotalPrice)


    return (
        <div>
            <nav className={props.cartShowed? 'nav-menu active': 'nav-menu'}>
                <div onClick={props.changeCartShowed}> 
                    <Button> Close </Button> 
                </div>
                
                <div>
                    <ul 
                        style={{
                            listStyleType: "none",
                            paddingInlineStart: "0px",
                            overflowY: "scroll", 
                            overflowX: "hidden", 
                            height: "550px",
                            width: "250px"
                            }}>
                        {cartList.map((item) => {
                            return (
                                <li key={item.productName}> 
                                    <CartItem productName={item.productName} price={item.price} count={item.count} src={item.src}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div style={{
                    "margin":"10px 0", "padding":"0px 0px", 
                    "position": "fixed",
                    "bottom": 0,}}>
                        <div> Total price: {totalPrice}</div>
                        <Link to="payment"> <Button onClick={()=>{dispatch(addOneToCount())}}> Checkout </Button>  </Link>
                </div>
            </nav>
        </div>
        
    )
    

}

export default CartSider