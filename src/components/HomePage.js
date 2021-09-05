import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UploadOutlined, VideoCameraOutlined, SearchOutlined, CrownFilled, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import MyCarousel from './common/MyCarousel';
import Category from './common/Category';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class HomePage extends React.Component {
    state = {
        collapsed: true,
        show_badges: true
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });

    };
    toggleOff = () => {
        this.setState({
            collapsed: true,
        });
    };

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: '0' }}>
                    <Link to="#" className='trigger hide-large ' style={{ fontSize: '24px', zIndex: 2 }} onClick={this.toggle}>
                        <UnorderedListOutlined style={{ color: 'grey' }} />
                    </Link >
                    <Link to="#" className="logo" ><CrownFilled style={{ color: 'red' }} /></Link>
                    <Link to="#" className="search" ><SearchOutlined style={{ color: 'gray' }} /></Link>
                    <Menu className="hide-small" style={{ paddingLeft: '60px' }} theme="light" mode="horizontal" defaultSelectedKeys={[]}>
                        <Menu.Item key="1"> Orders </Menu.Item>
                        <Menu.Item key="2">News</Menu.Item>
                        <Menu.Item key="3">Notifications</Menu.Item>
                        <Menu.Item key="4">Wishlist</Menu.Item>
                        <Menu.Item key="5">Cart</Menu.Item>
                        <SubMenu key="h_sub1"title='More'>
                            <Menu.Item key="6">Settings</Menu.Item>
                            <Menu.Item key="7">Instructions</Menu.Item>
                            <Menu.Item key="8">About</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
                <Layout style={{ height: '100%' }}>
                    <Sider width={'70%'} className='hide-large' collapsedWidth='0' defaultCollapsed='true' style={{ position: 'fixed', top: '0', height: '100%', zIndex: 3, background: '#fff' }} trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="side-logo" >
                            <img src="store.png" width="50" alt="" />
                            <h5>Store</h5>
                        </div>
                        <Menu theme="light" mode="inline" style={{fontSize:'11px'}} defaultSelectedKeys={[]}>
                            <Menu.Item key="1" style={{margin:0}} icon={<ShoppingCartOutlined />}>
                                <i style={{ marginLeft: '20px' }}>Cart</i> <i style={{ float: 'right', color: 'grey' }}>2</i>
                            </Menu.Item>
                            <Menu.Item key="2" style={{margin:0}} icon={<VideoCameraOutlined />}>
                                <i style={{ marginLeft: '20px' }}>Wishlist</i> <i style={{ float: 'right', color: 'grey' }}>2</i>
                            </Menu.Item>
                            <Menu.Item key="3" style={{margin:0}} icon={<UploadOutlined />}>
                                <i style={{ marginLeft: '20px' }}>Orders</i> <i style={{ float: 'right', color: 'grey' }}>2</i>
                            </Menu.Item>
                            <Menu.Item key="4" style={{margin:0}} icon={<UploadOutlined />}>
                                <i style={{ marginLeft: '20px' }}>News</i> <i style={{ float: 'right', color: 'grey' }}>2</i>
                            </Menu.Item>
                            <Menu.Item key="5" style={{margin:0}} icon={<UploadOutlined />}>
                                <i style={{ marginLeft: '20px' }}>Notifications</i> <i style={{ float: 'right', color: 'grey' }}>2</i>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key="6" style={{margin:0}} icon={<UploadOutlined />}>
                                <i style={{ marginLeft: '20px' }}>Instructions</i>
                            </Menu.Item>
                            <Menu.Item key="7" style={{margin:0}} icon={<UploadOutlined />}>
                                <i style={{ marginLeft: '20px' }}>Settings</i>
                            </Menu.Item>
                            <Menu.Item key="8" style={{margin:0}} icon={<UploadOutlined />}>
                                <i style={{ marginLeft: '20px' }}>About</i>
                            </Menu.Item>


                        </Menu>
                    </Sider>

                    <Layout style={{ padding: '0 5px 5px',marginTop:'60px' }} onClick={this.toggleOff}>
                        <Breadcrumb className="hide-small" style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="site-layout-background" style={{paddingTop:'16px',margin: 0,}}>
                           <span style={{fontSize:'12px'}}>What's New</span>
                            <MyCarousel></MyCarousel>
                            <Category></Category>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;