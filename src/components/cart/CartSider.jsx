import React from "react";
import { Row, Col, Button } from 'antd'
import  { useSelector, useDispatch } from 'react-redux'
import { addOneToCount, addItem, deleteItem, selectCartList, selectCount } from '../../redux/cartSlice'
import CartItem from "./CartItem";

import './Cart.css';
import { CartProducts } from './dataCart'


function CartSider(props) {

    const dispatch = useDispatch()
    const cartList = useSelector(selectCartList)
    const count = useSelector(selectCount)


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
                                    <CartItem productName={item.productName} price={item.price} count={item.count}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div style={{
                    "margin":"10px 0", "padding":"0px 0px", 
                    "position": "fixed",
                    "bottom": 0,}}>
                        <div> Total price: </div>
                        <div> Total Count: {count} </div>
                        <Button onClick={()=>{dispatch(addOneToCount())}}> Checkout </Button> 
                </div>
                
            </nav>
        </div>
        
    )
    

}

export default CartSider