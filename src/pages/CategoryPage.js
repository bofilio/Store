import React from 'react'
import { useParams } from 'react-router'
import { Layout, Space } from 'antd';
const { Header, Content } = Layout
const CategoryPage = () => {
    let { cat } = useParams();
    return (
        <Layout>
            <Header style={{ backgroundColor: "purple", padding: '8px 8px', zIndex: 1, width: '100%', height: "100px" }}>
                <i className="fa fa-user" style={{ position: 'absolute', right: '8px', top: '16px' }}></i>
                <i className="fa fa-user" style={{ position: 'absolute', right: '48px', top: '16px' }}></i>
                <img src='shirt.png' alt="" width="32px" />
                <Space direction='horizontal' style={{ maxHeight: '48px', overflow: 'hidden' }}>
                    <div flex="48px">
                        <img src='shirt.png' alt="" width="32px" />
                    </div>
                    <div flex="auto" style={{  maxHeight: '48px', lineHeight: '100%' }}>
                        <strong style={{ fontSize: '9px', margin: 0 }}>{cat}</strong>
                        <p style={{ fontSize: '8px', margin: 0, lineHeight: '100%' }}>balala </p>
                    </div>
                </Space>
                <div style={{ right: '48px', marginTop: '35px', width: '100%', height: '50px' }}></div>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>
            </Content>
        </Layout>
    )
}

export default CategoryPage
