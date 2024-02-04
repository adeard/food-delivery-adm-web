import React from 'react'
import { HomeOutlined, CopyOutlined, CarOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import logo from '/travis_logo.png'
const { Sider } = Layout;

const menu_list = [
    {
        label: <Link to='/'>Dashboard</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to='/'>Messages</Link>,
        key: 'message',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to='/order'>Order List</Link>,
        key: 'order',
        icon: <CopyOutlined />,
    },
    {
        label: <Link to='/resto'>Resto List</Link>,
        key: 'resto',
        icon: <CopyOutlined />,
    },
    {
        label: <Link to='/menu'>Menu List</Link>,
        key: 'menu',
        icon: <CarOutlined />,
    },
    {
        label: <Link to='/review'>Reviews</Link>,
        key: 'review',
        icon: <CarOutlined />,
    },
    {
        label: <Link to='/bookmark'>Bookmarks</Link>,
        key: 'bookmark',
        icon: <CarOutlined />,
    },
    {
        label: <Link to='/profile'>My Profile</Link>,
        key: 'profile',
        icon: <CarOutlined />,
    },
]

const SidebarFrag = (props) => {    
    const {collapsed, current_page} = props;
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:"#3F5E5A"}}>
            <div className="demo-logo-vertical" />
            <h1><img src={logo} alt='' height={"50px"} /></h1>            
            <Menu
            style={{
                color:"white",
                backgroundColor:"#38423B"
            }}
            mode="inline"
            selectedKeys={[current_page]} 
            items={menu_list}
            />
        </Sider>
    )
}

export default SidebarFrag