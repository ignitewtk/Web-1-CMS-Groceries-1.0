
import React, {Component} from 'react'
import {
    Card, Table, Button, Icon, LinkButton
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';

import FileUpload from '../../fileUploading'

class Product extends Component {
    render() {

        const title = "Level 1 Category"
        
        const extra = (
            <Button type="primary">
                <PlusOutlined />
                Add
            </Button>
        )
        const datasource = [
            {
                key: "1",
                productName: "Apple",
                categoryName: "Fruit",
                counts: 23,
                price: 2.49
            },
            {
                key: "2",
                productName: "Pear",
                categoryName: "Fruit",
                counts: 255,
                price: 3.49
            },
            {
                key: "3",
                productName: "Buk Choy",
                categoryName: "Veges",
                counts: 324,
                price: 2.99
            },
            {
                key: "4",
                productName: "Beef",
                categoryName: "Meat",
                counts: 324,
                price: 5.99
            },
            
        ]

        // const columns = ["商家ID","菜单名称（中文）","菜单名称（英文）","商品ID","商品名称（中文）","商品名称（英文）",
        // "客户端价格","图片地址","排序","中文描述","英文描述","规格组名称（中文）","规格组名称（英文）",
        // "规格值（中文）","规格值（英文）","规格值价格","加价","配料组名称（中文）","配料组名称（英文）",
        // "配料值（中文）","配料值（英文）","配料值价格","配料状态","配料上限","配料下限","类型","状态",
        // "是否限购","打包费"	,"库存","商品编号","货架编号","消费税率%","选择语言版本"]


        const columns = [
            {
                title: "ProductName",
                dataIndex: "productName",
                key: "productName"
            },
            {
                title: "CategoryName",
                dataIndex: "categoryName",
                key: "categoryName"
            },
            {
                title: "Counts",
                dataIndex: "counts",
                key: "counts"
            },
            {
                title: "Price",
                dataIndex: "price",
                key: "price"
            },
            {
                title: "Options",
                dataIndex: "",
                key: "",
                render: () => <a>
                    <Button type="link"> Modify </Button>
                    <Button type="link"> View SubCategory </Button>
                </a>
            }
        ]
        return (
            <div>
                <h2> Product </h2>
                <Card title={title} extra={extra}>
                    <Table dataSource={datasource} columns={columns}></Table>
                </Card>
                <FileUpload />

            </div>
        )
    }
}

export default Product