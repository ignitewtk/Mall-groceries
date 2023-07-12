
import React, {useState} from "react"
import Product from "./Product";
import { Image, Button, Pagination,  Select, Row, Col, Checkbox, Input } from 'antd'

import {products, categories} from './config/products'
import { reqGetList, reqGetProductList, reqGetImage } from "../../api";
import  { useSelector, useDispatch } from 'react-redux'
import { applyFilters, selectFilters, selectCategory, selectRating, selectPrice, 
    displayImage, selectDisplayedImage, 
    setProductList, selectProductList, selectListOrder, setListOrder } from '../../redux/productSlice'

import {store} from '../../store'

import {connect} from 'react-redux'

import './product.css'
import { bindActionCreators } from "redux";

const {Option} = Select
const {Search} = Input;

function ControlPanel() {

    const dispatch = useDispatch()
    const filters = useSelector(selectFilters)
    const category = useSelector(selectCategory)
    const rating = useSelector(selectRating)
    const price = useSelector(selectPrice)
    const displayedImage = useSelector(selectDisplayedImage)
    const productList = useSelector(selectProductList)
    const listOrder = useSelector(selectListOrder)

    const [searchKeywords, setSearchKeywords] = useState("")
    const [categoryDisplay, setCategoryDisplay] = useState("block")
    const [ratingDisplayed, setRatingDisplayed] = useState("block")

    const [checkedCategories, setCheckedCategories] = useState([])

    function submitFilter() {
        
        const newParam = {
            category: 'ALL',
            rating: 0,
            price: 0
        }

        // update filter param state
        dispatch(applyFilters(newParam))
        
        // send request to backend and update product list
        reqGetProductList(newParam).then(response =>  {
            const productList = response.data
            dispatch(setProductList(productList))
        }).catch(error => {
            console.log("return product list error:", error)
        })

        let productName = "Tomatoes.jpg"
        reqGetImage({productName: productName}).then(response =>  {
            dispatch(displayImage(response.data))
        }).catch(error => {
            console.log("return displayed image error:", error)
        })
    }

    function onSearch(value) {
        setSearchKeywords(value)
    }

    function handleDropdownSelect(e) {
        dispatch(setListOrder(e))
    }

    function displayCategroyMenu(e) {
        const element = document.getElementById("dropdown-list")
        // console.log(element)
        // console.log(element, element.style.display)
        if (categoryDisplay === "block") {
            setCategoryDisplay("none")
        } else if (categoryDisplay === "none") {
            setCategoryDisplay("block")
        }
    }

    function displayRatingMenu(e) {
        // const element = document.getElementById("dropdown-list")
        // console.log(element)
        // console.log(element, element.style.display)
        if (ratingDisplayed === "block") {
            setRatingDisplayed("none")
        } else if (ratingDisplayed === "none") {
            setRatingDisplayed("block")
        }
    }

    function handleCategoryCheck(e) {
        var updatedList = [...checkedCategories]
        if (e.target.checked) {
            updatedList = [...checkedCategories, e.target.value]
        } else {
            updatedList.splice(checkedCategories.indexOf(e.target.value), 1)
        }
        setCheckedCategories(updatedList)
    }
    
    return (
        <div style={{"padding":"30px 40px 0px 30px"}}>
            <Row> <span> {category} and {rating} and {price} </span></Row>
            <Row> <Search placeholder="Search" onSearch={onSearch}/> </Row>
            <div>
                <Select
                    onChange={handleDropdownSelect}
                    id="dropdown-sort"
                    defaultValue={"Sort By Price: default"}
                    className="dropdown-order">
                    <Option value="default"> Sort: default </Option>
                    <Option value="price+"> Sort by price: lowest </Option>
                    <Option value="price-"> Sort: by price highest </Option>
                    <Option value="rating+"> Sort by rating: lowest </Option>
                    <Option value="rating-"> Sort by rating: highest </Option>
                </Select>
            </div>

            <div className="dropdown-menu">
                <div onClick={displayCategroyMenu} className="dropdown-button"> Categories </div>
                <div id="category-list" style={{display:categoryDisplay}} className="dropdown-content">
                    {
                        categories.map(item => (
                            <Row>
                                <Checkbox className="dropdown-item" 
                                    value={item} key={item} onChange={handleCategoryCheck}> {item} </Checkbox>
                            </Row>
                        ))
                    }
                </div>
            </div>

            <div className="dropdown-menu" >
                <div onClick={displayRatingMenu} className="dropdown-button" > Ratings </div>
                <div id="rating-list" style={{display:ratingDisplayed}} className="dropdown-content">
                    <Row className="dropdown-item"><Checkbox> 3 stars </Checkbox></Row>
                    <Row className="dropdown-item"><Checkbox> 4 stars </Checkbox></Row>
                    <Row className="dropdown-item"><Checkbox> 5 stars </Checkbox></Row>
                </div>
            </div>
            {/* <Image width={200} height={200} style={{margin:"0px"}}
                // referrer="no-referrer|origin|unsafe-url" 
                src={displayedImage} 
                /> */}
            {/* <div> <span> {displayedImage} </span></div> */}
            <Row> <Button onClick={submitFilter} type="primary" id="btn-applyFilter"> Apply Filters </Button> </Row> 
            
        </div>
    )
}

class ProductList extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {

        // Initial product list local data of product list if request fails
        if(this.props.productList.length === 0) {
            console.log(this.props.productList.length)
            this.props.setProductList(products)
        }

        return (
            <Row style={{ height: "100%", width:"100%"}}>
                <Col span={6}> <ControlPanel /> </Col> 
                <Col span={18}>
                    <div style={{ margin:"30px 0 0 0", height: "60vh", overflowY:"scroll", scrollbarWidth: "none"}}>
                        <Row>
                            {
                                store.getState().product.productList.map(item => (
                                    <Product key={item.productName} productDetail={item} src={item.src} />
                                ))
                                // Condition rendering
                                // (
                                //     (store.getState().product.productList.length > 0 && 
                                //     store.getState().product.productList.map(item => (
                                //         <Product key={item.productName} productDetail={item} src={item.src} />
                                //     ))) || 
                                //     (store.getState().product.productList.length === 0 &&
                                //     products.map(item => (
                                //         <Product key={item.productName} productDetail={item} src={item.src} />
                                //     )))
                                // )
                            }
                        </Row> 
                    </div>
                    <div style={{ margin:"30px"}}>
                        <Row>
                            <Pagination 
                                total={12}
                                showSizeChanger
                                showQuickJumper
                                showTotal={(total)=> `Total ${total} items`}
                            />
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product.productList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setProductList: (products) => dispatch(setProductList(products)),
        }
    )
}
// export default ProductList;
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);