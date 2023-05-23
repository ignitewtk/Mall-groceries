import React from "react";
import { Button, Row, Col } from 'antd'
import { CloseOutlined} from '@ant-design/icons';
import  { useSelector, useDispatch } from 'react-redux'
import { addOneToCount, addItem, deleteItem, selectCartList, selectCount, selectTotalPrice } from '../../redux/cartSlice'
import CartItem from "../cart/CartItem";

function CartPreview(props) {


    const dispatch = useDispatch()
    const cartList = useSelector(selectCartList)
    const count = useSelector(selectCount)
    const totalPrice = useSelector(selectTotalPrice)

    return (
        <Row style={{width:"20vw", margin: "0 0 0 40px"}}>
            <Row> Cart List </Row>
            <div>
                <ul 
                    style={{
                        listStyleType: "none",
                        paddingInlineStart: "0px",
                        overflowY: "scroll", 
                        overflowX: "hidden", 
                        height: "80vh",
                        width: "950px",
                        margin: "0 0 0 40px"
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
        </Row>
    )
}

export default CartPreview;
