
import React from "react"
import { Rate, Collapse, Image, Button } from 'antd'
import { reqGetImage } from "../../api"
import { addItem, deleteItem, selectCartList } from '../../redux/cartSlice'


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
        <div style={{wdith:"300px", height:"400px", display:"inline", margin: "20px 10px"}}>
            <Image 
                width={200} height={200} 
                style={{margin:"0px"}}
                src={details.src} />
            <div onClick={reqImage}>  {details.productName} </div>
            
            <Rate disabled defaultValue={details.rating}> </Rate>
            
            <div>
                <div> Review </div>
            </div>

            <div> $ 
                <span style={{color:"red", fontSize:"18px", fontWeight:"bold"}}>
                    {details.discountPrice}</span>
            </div>
            <div> RRP: <s>${details.originPrice}</s> </div>
            <Button onClick={addToCart}> Add </Button>
            
        </div>
    )
    
}

export default Product;
