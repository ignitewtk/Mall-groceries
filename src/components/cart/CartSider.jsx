import React from "react";
import { Row, Col, Button } from 'antd'
import './Cart.css';
import CartItem from "./CartItem";

class CartSider extends React.Component {
    constructor(props) {
        super(props)
        this.CartProducts = [
            {
                productName: "Product 1",
                price: 20,
                count: 3,
            },
            {
                productName: "Product 2",
                price: 30,
                count: 3,
            },
            {
                productName: "Product 3",
                price: 40,
                count: 3,
            },
        ]
    }
    render () {
        return (
            <div>
                <nav className={this.props.cartShowed? 'nav-menu active': 'nav-menu'}>
                    <div onClick={this.props.changeCartShowed}> 
                        <Button> Close </Button> 
                    </div>
                    <div> Total price: </div>
                    <div>
                        <ul>
                            {this.CartProducts.map((item) => {
                                return (

                                    <li key={item.productName}> 
                                        <CartItem productName={item.productName} price={item.price} count={item.count}/>
                                        {/* <span> {item.productName}: {item.price}  </span> */}
                                    </li>
                                )
                                
                            })}
                        </ul>
                    </div>
                    <Button> Checkout </Button> 
                </nav>
            </div>
            
        )
        
    }
}

export default CartSider