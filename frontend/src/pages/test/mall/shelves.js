
import React from "react"
import Product from "./product";
import { Carousel, Button } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { login, logout, selectIsLogin, selectUsername } from '../../public/redux/accountSlice'




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
            <div> Filter and Search bar </div>
            <ul>
                <li> Product 1 </li> 
            </ul>
            <div> 
                <Product />
                <Product />
            </div>
            
            <div> Section 2 </div>
            <div> Section 3 </div>
            <div> About </div>
        </div>
    )
}


