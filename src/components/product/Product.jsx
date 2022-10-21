
import React from "react"
import { Rate, Collapse, Image} from 'antd'
import { reqGetImage } from "../../api"

import 'antd/dist/antd.css'

const { Panel } = Collapse

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;

const onChange = (key) => {
    console.log(key)
}

class Product extends React.Component {
    constructor (props) {
        super(props)
        if (props.productDetail) {
            this.productDetail = props.productDetail
        } else {
            this.productDetail = {
                name: "Product name",
                originPrice: 2,
                discountPrice: 1.5,
                rating: 3,
                src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            }
        }
        this.reqImage = this.reqImage.bind(this)
    }

    reqImage(e) {
        console.log("click product name and get image", e.target)
        reqGetImage({productName: this.productDetail.name}).then(response => {
            console.log("(Product.jsx/reqImage):", response.data)
        }).catch(error => {
            console.log("(Product.jsx/reqImage) error", error)
        })
    }

    render() {
        return (
            <div style={{wdith:"300px", height:"400px", display:"inline", margin: "20px 10px"}}>
                <Image width={200} height={200} src={this.productDetail.src} />
                <div onClick={this.reqImage}>  {this.productDetail.name} </div>
                <div> Description </div>
                <div> Sales </div>
                <Rate disabled defaultValue={this.productDetail.rating}> </Rate>
                
                <div>
                    <div> Review </div>
                </div>

                <div> $ <span style={{color:"red", fontSize:"18px", fontWeight:"bold"}}>{this.productDetail.discountPrice}</span> </div>
                <div> RRP: <s>${this.productDetail.originPrice}</s> </div>
                
                <Collapse  style={{width:"300px"}} defaultActiveKey={['1']} onChange={onChange}>
                    <Panel header="This is Specification of Product 1">
                        <p> {text} </p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Product;
