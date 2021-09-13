import React, { useContext } from 'react';
import { Layout } from 'antd';
import MyCarousel from '../components/MyCarousel';
import NavBar from '../components/NanBar';
import SideBar from '../components/SideBar';
import CategoryList from '../components/CategoryList';
const { Content } = Layout;

const HomePage = () => {
   
    return (
        <Layout style={{ height: '100%' }}>
                <NavBar />
                <Layout style={{ height: '100%' }}>
                    <SideBar />
                    <Layout style={{ padding: '10px', marginTop: '60px',backgroundColor:'#E7EBF6'}}>
                        <Content style={{ paddingTop: '16px', margin: 0, }}>
                            <span style={{ fontSize: '11px' }}>What's New</span>
                            <MyCarousel></MyCarousel>
                            <CategoryList/>
                        </Content>
                    </Layout>
                </Layout>
            
        </Layout>
    );
}

export default HomePage;

