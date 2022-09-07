
import React, {Component} from 'react'
import {
    Card, Table, Button, Icon, LinkButton
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


class Category extends Component {
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
                name: "Veges",
                counts: 23,
            },
            {
                key: "2",
                name: "Meats",
                counts: 255,
            },
        ]
        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "Counts",
                dataIndex: "counts",
                key: "counts"
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
                <h2> Category </h2>
                <Card title={title} extra={extra}>
                    <Table dataSource={datasource} columns={columns}></Table>
                </Card>

            </div>
        )
    }
}

export default Category