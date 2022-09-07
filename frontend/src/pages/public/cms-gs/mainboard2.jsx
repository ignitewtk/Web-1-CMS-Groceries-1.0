import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, SubMenu } from "antd";

import { BrowserRouter, Redirect, Routes, Route, Link, useMatch, Outlet } from 'react-router-dom'

import React, {Component} from 'react'

import menuList from './config/menuConfig'
import './mainboard2.css'
import FileUpload from './fileUploading';

const {Header, Content, Sider} = Layout
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });



export function Home() {
    return (
        <div> <h2>Home</h2> </div>
    )
}


export function PieChart() {
    return (
        <div> PieChart </div>
    )
}



class MainBoard2 extends Component  {

    //根据memu的数据数组，生成标数组
    // getMenuNodes = (menuList) => {
    //     return menuList.map(item => {
    //         if(!item.children) {
    //             return (
    //                 <Menu.Item key={item.key}>
    //                     <Link to={item.key}>
    //                         {/* <Icon type={item.icon}></Icon> */}
    //                         <span> {item.title} </span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         } else {
    //             return (
    //                 <SubMenu 
    //                     key={item.key}
    //                     title={
    //                         <span>
    //                             {/* <Icon type={item.icon}></Icon> */}
    //                             <span> {item.title} </span>
    //                         </span>
    //                     }>
    //                     {this.getMenuNodes(item.children) /* 递归 */}
    //                 </SubMenu>
    //             )
    //         }
    //     })
    // }

    render () {
        
        return(
            <Layout>
                <Header className="header">
                    <div className="logo"></div>
                    {/* <Menu 
                        theme="dark"
                        mode='horizontal'
                        defaultSelectedKeys={['2']}
                        items={["Nav1", "Nav2", "Nav3"]}
                    /> */}
                    
                </Header>
                {/* <Layout>
                    <Menu
                    mode='inline'
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={items2}
                    />
                </Layout> */}
                
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode='inline'
                            style={{
                                height: '100%',
                                borderRight: 0,
                              }}
                            items={menuList}
                        />
                    </Sider>
                    <Layout
                        style={{
                            padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb>
                            <Breadcrumb.Item> Home </Breadcrumb.Item>
                            <Breadcrumb.Item> List </Breadcrumb.Item>
                            <Breadcrumb.Item> App </Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}>
                            <Outlet />
                        </Content>
                    </Layout>
                    </Layout>
            </Layout>
        )}
}

export default MainBoard2;