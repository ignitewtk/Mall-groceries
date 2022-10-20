
import React from "react"
import { Rate, Collapse, Image, Comment, Avatar, Tooltip } from 'antd'
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';

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

class ProductDetail extends React.Component {
    
    render() {

        return (
            <div style={{wdith:"300px", display:"inline", margin: "20px 10px"}}>
                <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                <div> Product Name </div>
                <div> Description </div>
                <div> Sales </div>
                <Rate disabled defaultValue={3}> </Rate>
                
                <div>
                    <div> Review </div>
                    {/* <Comment /> */}
                </div>


                <div> Origin Price </div>
                <div> Promotion Price </div>
                <Collapse  style={{width:"300px"}} defaultActiveKey={['1']} onChange={onChange}>
                    <Panel header="This is Specification of Product 1">
                        <p> {text} </p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default ProductDetail;
