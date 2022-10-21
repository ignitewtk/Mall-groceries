
import React from "react"
import Product from "./Product";
import { Image, Button, Pagination,  Select, Row, Col, Checkbox, Input } from 'antd'

import products from './config/products'
import { reqGetProductList, reqGetImage } from "../../api";
import  { useSelector, useDispatch } from 'react-redux'
import { applyFilters, selectFilters, selectCategory, selectRating, selectPrice, 
    displayImage, selectDisplayedImage } from '../../redux/productSlice'


const {Option} = Select
const {Search} = Input;

function ControlPanel() {

    const dispatch = useDispatch()
    const filters = useSelector(selectFilters)
    const category = useSelector(selectCategory)
    const rating = useSelector(selectRating)
    const price = useSelector(selectPrice)
    const displayedImage = useSelector(selectDisplayedImage)

    function getBase64(img) {
        const base64Url = `data:image/jpg;base64, ${window.btoa(
            new Uint8Array(img).reduce(
                (data, byte) => data + String.fromCharCode(byte), ""
            )
        )}`
        return base64Url
    }

    function submitFilter() {
        const newParam = {
            category: 'veges',
            rating: 3,
            price: 10
        }
        // update filter param state
        dispatch(applyFilters(newParam))
        
        // send request to backend and update product list
        reqGetProductList(newParam).then(response =>  {
            console.log("return product list:", response.data)
        }).catch(error => {
            console.log("return product list error:", error)
        })

        let productName = "Tomatoes.jpg"
        reqGetImage({productName: productName}).then(response =>  {
            console.log("return displayed image:", response)
            dispatch(displayImage(response.data))
        }).catch(error => {
            console.log("return displayed image error:", error)
        })
    }



    return (
        <div style={{"padding":"30px 0px 0px 30px"}}>
            
            <Image width={200} height={200} 
                // referrer="no-referrer|origin|unsafe-url" 
                src={displayedImage} 
                />

            <div> <span> {displayedImage} </span></div>
            <Row> <Button onClick={submitFilter} type="primary"> Apply Filters </Button> </Row> 
            <Row> <Search placeholder="Search"/> </Row>
            <Row> <span> {category} and {rating} and {price} </span></Row>
            <Row>
                <Col>
                    <Select
                        defaultValue={"Sort By Price: default"}
                        style={{
                            width: 200,
                        }}>
                        <Option value="default"> Sort By Price: default </Option>
                        <Option value="price+"> Sort By Price: low to high </Option>
                        <Option value="price-"> Sort By Price: high to low </Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Select
                        defaultValue={"Sort By Time: default"}
                        style={{
                            width: 200,
                        }}>
                        <Option value="default"> Sort By Time: default </Option>
                        <Option value="time+"> Sort By Time: Oldest </Option>
                        <Option value="time-"> Sort By Time: Newest </Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Select
                        defaultValue={"Sort By Rating: default"}
                        style={{
                            width: 200,
                        }}>
                        <Option value="default"> Sort By Rating: default </Option>
                        <Option value="rating+"> Sort By Rating: low to high </Option>
                        <Option value="rating-"> Sort By Rating: high to low </Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div> Categories </div>
                    <Row><Checkbox> Vegetable </Checkbox></Row>
                    <Row><Checkbox> Fruit </Checkbox></Row>
                    <Row><Checkbox> Meat </Checkbox></Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div> Ratings </div>
                    <Row><Checkbox> 3 stars </Checkbox></Row>
                    <Row><Checkbox> 4 stars </Checkbox></Row>
                    <Row><Checkbox> 5 stars </Checkbox></Row>
                </Col>
            </Row>
        </div>
        
    )
}


class ProductList extends React.Component {

    render () {
        return (
            <Row>
                
                <Col span={6}> <ControlPanel /> </Col> 
                <Col span={18}>
                    <Row>
                        {
                            products.map(item => (
                                <Product key={item.name} productDetail={item}/>
                            ))
                        }
                    </Row>
                    <Row>
                        <Product key="pork" productDetail={
                            {
                                name: "Pork Loin",
                                originPrice: 10.56,
                                discountPrice: 8.99,
                                rating: 3,
                                img: require("./img/PorkLoin.jpg"),
                            }
                        }/>
                        <Product key="Asian Baby Bulk Choy" productDetail={
                            {
                                name: "Asian Baby Bulk Choy",
                                originPrice: 2.99,
                                discountPrice: 2.5,
                                rating: 4,
                                img: require("./img/Asian Baby Bulk Choy.jpg"),
                            }
                        }/>
                        <Product key="Fresh Eggs" productDetail={
                            {
                                name: "Fresh Eggs",
                                originPrice: 7.88,
                                discountPrice: 6.99,
                                rating: 5,
                                img: require("./img/Fresh Eggs.jpg"),
                            }
                        }/>
                    </Row>
                    <Row>
                        <Col span={8}><Product /></Col>
                        {/* <Col span={8}><Product /></Col>
                        <Col span={8}><Product /></Col> */}
                    </Row>
                    <Row>
                    <Pagination 
                        total={12}
                        showSizeChanger
                        showQuickJumper
                        showTotal={(total)=> `Total ${total} items`}
                    />
                    </Row>
                </Col>
            </Row>
        )
    }
}


export default ProductList;