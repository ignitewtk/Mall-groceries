
import React from "react"
import Product from "./product/product";
import { Carousel, Button, Pagination,  Select, Row, Col, Checkbox} from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { login, logout, selectIsLogin, selectUsername } from '../../public/redux/accountSlice'

import products from './product/config/products'



const {Option} = Select


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export function Shelves() {
    const username = useSelector(selectUsername)
    const isLogin = useSelector(selectIsLogin)
    const dispatch = useDispatch()

    return (
        <div>
            <header> Header and Logo and  </header>
            <div> 
                
                <Button onClick={() => dispatch(login())}>
                    Login 
                </Button>
                <Button onClick={() => dispatch(logout())}>
                    Logout
                </Button>
                <div> {username} and {isLogin} </div>
            </div>
            
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <div> Navigator </div>
            <div> 
                <Row> Filter and Search bar </Row> 
                <Row>
                    <Select
                        defaultValue={"price+"}
                        style={{
                            width: 120,
                        }}
                    >
                        <Option Value="default"> Sort By Price: default </Option>
                        <Option Value="price+"> Sort By Price: low to high </Option>
                        <Option Value="price-"> Sort By Price: high to low </Option>
                    </Select>
                    <Select
                        defaultValue={"default"}
                        style={{
                            width: 120,
                        }}
                    >
                        <Option Value="default"> Sort By Time: default </Option>
                        <Option Value="time+"> Sort By Time: Oldest </Option>
                        <Option Value="time-"> Sort By Time: Newest </Option>
                    </Select>
                    <Select
                        defaultValue={"default"}
                        style={{
                            width: 120,
                        }}
                    >
                        <Option Value="default"> Sort By Rating: default </Option>
                        <Option Value="rating+"> Sort By Rating: low to high </Option>
                        <Option Value="rating-"> Sort By Rating: high to low </Option>
                    </Select>
                </Row>
                <Row>
                    <Col span={6}>
                        <div>
                            <div> Categories </div>
                            <Row><Checkbox> Vegetable </Checkbox></Row>
                            <Row><Checkbox> Fruit </Checkbox></Row>
                            <Row><Checkbox> Meat </Checkbox></Row>
                        </div>
                        <div>
                            <div> Ratings </div>
                            <Row><Checkbox> 3 stars </Checkbox></Row>
                            <Row><Checkbox> 4 stars </Checkbox></Row>
                            <Row><Checkbox> 5 stars </Checkbox></Row>
                        </div>
                    </Col>
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
                            <Col span={8}><Product /></Col>
                            <Col span={8}><Product /></Col>
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
                
            </div>
        </div>
    )
}


