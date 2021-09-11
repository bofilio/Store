import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, CrownFilled, SearchOutlined } from '@ant-design/icons';
import { SideBarContext } from './SideBarContext';
import MyColors from '../util/colors';
import { CoverContext } from './CoverContext';
const { Header } = Layout
const { SubMenu } = Menu;

const NavBar = () => {
    const [collapsed, setCollapsed] = useContext(SideBarContext);
    const [visible,SetVisible]=useContext(CoverContext);
    const toggle = () => {
        setCollapsed(!collapsed);
        SetVisible(!visible)
    }
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: '0' }}>
            <Link to="#" className='trigger hide-large ' style={{ fontSize: '24px', zIndex: 2 }} onClick={toggle}>
                <UnorderedListOutlined style={{ color:MyColors.color1}} />
            </Link >
            <Link to="#" className="logo" ><CrownFilled style={{ color: MyColors.color2 }} /></Link>
            <Link to="#" className="search" ><SearchOutlined style={{ color: MyColors.color1 }} /></Link>
            
            <Menu className="hide-small" style={{ paddingLeft: '60px' }} theme="light" mode="horizontal" >
                <Menu.Item key="1"> Orders </Menu.Item>
                <Menu.Item key="2">News</Menu.Item>
                <Menu.Item key="3">Notifications</Menu.Item>
                <Menu.Item key="4">Wishlist</Menu.Item>
                <Menu.Item key="5">Cart</Menu.Item>
                <SubMenu key="h_sub1" title='More'>
                    <Menu.Item key="6">Settings</Menu.Item>
                    <Menu.Item key="7">Instructions</Menu.Item>
                    <Menu.Item key="8">About</Menu.Item>
                </SubMenu>
            </Menu>
        </Header>
    )
}
export default NavBar;

