
import React from "react"
import { SearchOutlined, ShoppingCartOutlined, EnvironmentOutlined ,FacebookOutlined, InstagramOutlined, TwitterOutlined, } from '@ant-design/icons';
import { Col, Row, Input, Menu, Pagination } from 'antd'
import Banner from "./Banner";

const {Search} = Input;

class Theme extends React.Component {
  render() {

    const menuItems = [
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
        <ThemeHeader />
        <Banner />
        <Menu mode="horizontal" items={menuItems}></Menu>
        <div> Filter </div>
        <div> Section 1 </div>
        <div> Section 2 </div>
        <div> Section 3 </div>
        
        <div> Float Ads </div>
        <div> Navigator </div>
        <About />
      </div>
    )
  }
}

class ThemeHeader extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={3}> LOGO </Col>
          <Col span={12}>  </Col>
          <Col span={3}> <Search placeholder="Search"/>  </Col>
          <Col span={2}> <EnvironmentOutlined /> Location </Col>
          <Col span={2}> Account </Col>
          <Col span={2}> <ShoppingCartOutlined /> Cart </Col>
        </Row>
        <Row>
          Category
        </Row>
      </div>
      
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <Row>
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

export default Theme;
