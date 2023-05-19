
import React from "react"
import { Rate, Collapse, Image, Button, Row, Col } from 'antd'
import { reqGetImage } from "../../api"
import { addItem, deleteItem, selectCartList } from '../../redux/cartSlice'
import { StarFilled } from '@ant-design/icons'

import 'antd/dist/antd.css'
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"


const onChange = (key) => {
    console.log(key)
}

function Product(props) {

    const dispatch = useDispatch()
    const cartList = useSelector(selectCartList)

    var details 
    if (props.productDetail) {
        details = props.productDetail
    } else {
        details = {
            name: "mock product",
            rating: 4,
            originPrice: 2,
            discountPrice: 1.5,
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        }
    }
    
    function addToCart() {
        // console.log(props.productDetail.productName)
        const item = {
            id: details.productName,
            productName: details.productName,
            price: details.discountPrice,
            count: 1,
            src: details.src
        }
        dispatch(addItem(item))
        console.log("Product CartList: ", cartList)
    }

    function reqImage(e) {
        console.log("click product name and get image", e.target)
        reqGetImage({productName: details.productName}).then(response => {
            console.log("(Product.jsx/reqImage):", response.data)
        }).catch(error => {
            console.log("(Product.jsx/reqImage) error", error)
        })
    }

    return (
        <div style={{wdith:"300px", height:"400px", margin: "10px 20px 0 0"}}>
            <Image 
                width={200} height={200} 
                style={{margin:"0px"}}
                src={details.src} />
            
            
            {/* <Rate disabled defaultValue={details.rating}> </Rate> */}
            <Row>
                <span onClick={reqImage} style={{ height:"",fontSize:"18px", fontWeight:"normal"}}> {details.productName} </span>
            </Row>
            <Row  style={{ fontWeight: "bold", fontSize:"20px"}}>
                <Col span={8}> 
                <span>
                    <span>$ </span> 
                    <span style={{ color:"red"}}>
                        {details.discountPrice}</span>
                </span>
                    
                </Col>
            </Row>
            
            {/* <div> RRP: <s>${details.originPrice}</s> </div> */}
            <Button style={{ 
                width:"100%", height:"2.75rem", background: "#178841", 
                color:"white", fontWeight:"bold"}} onClick={addToCart}> Add </Button>
            
        </div>
    )
    
}

export default Product;
