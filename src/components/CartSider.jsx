import React from "react";
import { Row, Col, Button } from 'antd'
import './Cart.css';


class CartSider extends React.Component {
    constructor(props) {
        super(props)
        this.CartProducts = [
            {
                productName: "Product 1",
                price: 20
            },
            {
                productName: "Product 2",
                price: 30
            },
            {
                productName: "Product 3",
                price: 40
            },
        ]
    }
    render () {
        console.log("cartshowed in CartSider:", this.props.cartShowed)
        return (
            <div>
            
            <nav className={this.props.cartShowed? 'nav-menu active': 'nav-menu'}>
                <div onClick={this.props.changeCartShowed}> Close </div>
                <div>
                    <ul>
                        {this.CartProducts.map((item) => {
                            return (
                                <li key={item.productName}> 
                                    <span> {item.productName}: {item.price}  </span>
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