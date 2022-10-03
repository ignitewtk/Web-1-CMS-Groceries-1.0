import { HomeOutlined, BarChartOutlined, MenuOutlined, UserOutlined, TagOutlined, PieChartOutlined, RadarChartOutlined, ShoppingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
const menuList = [
    {
        label: <Link to="home"> Home </Link>,
        key: '/home',
        icon: <HomeOutlined />
    },
    {
        label: 'Users',
        key: '/users',
        icon: <UserOutlined/>,
    },
    {
        label: 'Products',
        key: '/products',
        icon: <ShoppingOutlined />,
        children: [
            {
                // label: 'Category',
                label: <Link to="category"> Category </Link>,
                key: '/category',
                icon: <MenuOutlined />
            },
            {
                label: <Link to="product"> Product </Link>,
                key: '/product',
                icon: <TagOutlined/>
            },
        ]
    },
    {
        label: 'Dashboards',
        key: '/dashboards',
        icon: <BarChartOutlined/>,
        children: [
            {
                label: <Link to="pie"> Pie Chart </Link>,
                key: '/pie',
                icon: <PieChartOutlined/>
            },
            {
                label: 'Bar Chart',
                key: '/bar',
                icon: <BarChartOutlined/>
            },
        ]
    },
    {
        label: <Link to="report"> Report </Link>,
        key: '/report',
        icon: <RadarChartOutlined />,
    },

]

export default menuList