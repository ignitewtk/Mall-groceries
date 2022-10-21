import React from "react";
import { Row, Col, Button } from 'antd'
import productImage from '../product/img/Creamy Potato.jpg'


export default class CartItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img  src={productImage}/>
                <div> {this.props.productName} </div>
                <div> {this.props.price} </div>
                <div> {this.props.count} </div>
            </div>
        )
    }
}