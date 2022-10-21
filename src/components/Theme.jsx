
import React from "react"
import { SearchOutlined, ShoppingCartOutlined, EnvironmentOutlined ,FacebookOutlined, InstagramOutlined, TwitterOutlined, } from '@ant-design/icons';
import { Col, Row, Input, Menu, Pagination, BackTop} from 'antd'
import { Outlet, Link } from 'react-router-dom'

import Banner from "./Banner";
import CartSider from "./cart/CartSider"
import {store} from '../store'
import {connect} from 'react-redux'

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
      <div>
        <ThemeHeader cartShowed={this.state.cartShowed} changeCartShowed={this.changeCartShowed}/>
        <Menu mode="horizontal" items={menuItems}></Menu>
        <Outlet />
        <About />
        <BackTop />
        <CartSider cartShowed={this.state.cartShowed} changeCartShowed={this.changeCartShowed}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      sendAction: () => {
        dispatch({
          type: "add_action"
        })
      }
    }
}

const mapStateToProps = (state) => {
  return {state}
}


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
      <div style={{"padding":"20px 20px", "backgroundColor":"#C7E5B7"}}>
        <Row >
          <Col span={4}> <Link to="main"> LOGO </Link> </Col>
          <Col span={6}>  </Col>
          <Col span={4}> <Search placeholder="Search"/>  </Col>
          <Col span={2}>  </Col>
          <Col span={2}> <EnvironmentOutlined /> Location </Col>
          <Col span={2}> <Link to='login'> Login </Link> </Col>
        <Col span={2}> <Link to='profile'> {store.getState().account.sessionUserName} </Link> </Col>

          <Col span={2}> 
          <span onClick={this.showCart}> <ShoppingCartOutlined /> Cart  </span>  
          
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
          "margin":"20px 0", "padding":"50px 100px", 
          "position": "relative",
          "bottom": 0,
          "backgroundColor":"#C7E5B7"}}>
        <Col span={3}></Col>
        <Col span={6}>
          <Row> OFFICIAL SITE </Row>
          <Row> COMPANY </Row>
          <Row> ONLINE SITE </Row>
          <Row>
            <Col span={3}></Col>
            <Col span={6}><FacebookOutlined /></Col>
            <Col span={6}><InstagramOutlined /></Col>
            <Col span={6}><TwitterOutlined /></Col>
            <Col span={3}></Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row> CATEGORY </Row>
        </Col>
        <Col span={6}>
          <Row> SERVICE </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
