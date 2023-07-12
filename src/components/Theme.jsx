
import React from "react"
import { SearchOutlined, ShoppingCartOutlined, EnvironmentOutlined ,FacebookOutlined, InstagramOutlined, TwitterOutlined, CloseOutlined, UserOutlined} from '@ant-design/icons';
import { Col, Row, Input, Menu, Pagination, BackTop, Button} from 'antd'
import { Outlet, Link } from 'react-router-dom'

import Banner from "./Banner";
import CartSider from "./cart/CartSider"
import {store} from '../store'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";

const {Search} = Input;

class Theme extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      cartShowed: false
    }
    this.changeCartShowed = this.changeCartShowed.bind(this)
  }

  changeCartShowed(newCartShowed) {
    this.setState((state) => {
      return { cartShowed: !state.cartShowed }
    })
  }

  render() {
    const menuItems = [
      {
        label: <Link to="productList"> ALL </Link>,
        key: 'all',

      },
      {
        label: 'Navigation 1',
        key: 'nav1',
        children: [
          {
            label: 'Sub Navigation 1',
            key: 'subnav 1',
          },
          {
            label: 'Sub Navigation 2',
            key: 'subnav 2',
          },
        ]
      },
      {
        label: 'Navigation 2',
        key: 'nav2',
        children: [
          {
            label: 'Sub Navigation 3',
            key: 'subnav 3',
          },
          {
            label: 'Sub Navigation 4',
            key: 'subnav 4',
          },
        ]
      },
      {
        label: 'Navigation 3',
        key: 'nav3',
        disabled: true
      },
    ]
    return (
      <div style={{ height: "90vh", weight:"100vw", display:"block"}}>
        <Row>
          <Col span={12}> info@emallgorcerie.com </Col>
          <Col span={12}> Free shipping area available </Col>
        </Row>
        <ThemeHeader cartShowed={this.state.cartShowed} changeCartShowed={this.changeCartShowed}/>
        
        <Menu mode="horizontal" items={menuItems}></Menu>
        <section style={{ flexGrow:"1"}}>
          <Outlet />
        </section>
        <About />
        <BackTop />
        <CartSider cartShowed={this.state.cartShowed} changeCartShowed={this.changeCartShowed}/>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       sendAction: () => {
//         dispatch({
//           type: "add_action"
//         })
//       }
//     }
// }

// const mapStateToProps = (state) => {
//   return {state}
// }


class ThemeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.showCart = this.showCart.bind(this)
    this.state = {
      userName: 'Account',
      cartShowed: props.cartShowed
    }
  }
  // componentDidMount() {
  //   this.setState({
  //     userName: store.getState().account.userName
  //   })
  // }
  showCart () {
    // console.log(store.getState().account.userName)
    this.setState(
      {
        cartShowed: !this.state.cartShowed
      }
    )
    this.props.changeCartShowed(!this.state.cartShowed)
  }

  render() {
    return (
      <div style={{"padding":"20px 20px", "backgroundColor":"#171c1f"}}>
        <Row style={{ fontSize:"20px", color:"white"}}>
          <Col span={10}> 
            <Link to="main"> <span style={{ fontFamily:"cursive", fontSize:"40px", color:"white"}}> Fresh Home </span>
            </Link> 
          </Col>

          <Col span={14}>  
            <Button style={{ display:"flex", justifyContent: "center", width:"60px", 
              color:"white", borderColor:"transparent", backgroundColor: "transparent", 
              float:"right", padding: "0", margin:"0 15px 0 0", fontSize:"15px"}} onClick={this.showCart}> 
              <ShoppingCartOutlined style={{margin:"5px 0 0 0",  fontSize:"15px" }}/></Button>  

            <Link to='profile' style={{ float:"right", margin:"0 15px 0 0", fontSize:"15px"}}> <UserOutlined /> {store.getState().account.sessionUserName} </Link> 
            <Link to='login' style={{ float:"right", margin:"0 15px 0 0", fontSize:"15px"}}>Login</Link> 
            
            <Button style={{ 
              display:"flex", justifyContent: "center", width:"60px", color:"white", 
              borderColor:"transparent", backgroundColor: "transparent", float:"right", 
              padding: "0", margin:"0 15px 0 0", fontSize:"15px"}}> 
              <EnvironmentOutlined style={{ margin:"5px 0 0 0", fontSize:"15px"}}/></Button>  
          </Col>
        </Row>
      </div>
      
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <Row style={{
          "margin":"20px 0 0 0", "padding":"50px 100px", 
          "position": "relative",
          "bottom": 0,
          "backgroundColor":"#171c1f", color:"white"}}>
        <Col span={3}></Col>
        <Col span={6}>
          <Row style={{ margin:"20px 20px 10px 0", fontWeight:"bold", fontSize:"20px"}}> OFFICIAL SITE </Row>
          <Row> COMPANY </Row>
          <Row> ONLINE SITE </Row>
          <Row>
            <FacebookOutlined style={{ margin:"10px 20px 0 0", fontSize:"40px"}}/>
            <InstagramOutlined style={{ margin:"10px 20px 0 0", fontSize:"40px"}}/>
            <TwitterOutlined style={{ margin:"10px 20px 0 0", fontSize:"40px"}}/>
          </Row>
        </Col>
        <Col span={6}>
          <Row  style={{ margin:"20px 20px 10px 0", fontWeight:"bold", fontSize:"20px"}}> CATEGORY </Row>
        </Col>
        <Col span={6}>
          <Row style={{ margin:"20px 20px 10px 0", fontWeight:"bold", fontSize:"20px"}}> SERVICE </Row>
          <Row> About Us </Row>
          <Row> Shopping Guide </Row>
          <Row> Privacy Policy </Row>
          <Row> Recruit </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      // e.g count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
      {
          //e.g：increment: () => incrementAction()
      }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
