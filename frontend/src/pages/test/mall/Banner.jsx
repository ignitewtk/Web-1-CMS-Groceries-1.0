
import React from "react"
import Product from "./product";
import { Carousel, Button } from 'antd'
import defaultRenderEmpty from "antd/lib/config-provider/defaultRenderEmpty";

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

class Banner extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Banner;