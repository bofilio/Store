import React from 'react'
import { useParams } from 'react-router'
<<<<<<< HEAD
import FakeDatabase from '../data/data';
import ProductList from '../components/ProductList';
const CategoryPage = () => {
    let {name} = useParams();
    let category= FakeDatabase.getCategoryByName(name);
    
    return (
        <div>
        <div className="w3-block w3-padding-left" style={{height:'120px', backgroundColor:category.color}}>
            <div className="w3-bar" style={{padding:0,fontSize:"16px"}}>
                <div className="w3-bar-item"><i className="fa fa-arrow-left w3-class w3-text-white" ></i></div>
                <div className="w3-bar-item w3-right"><i className="fa fa-cart-arrow-down w3-text-white"></i></div>
                <div className="w3-bar-item w3-right" ><i className="fa fa-sort-amount-desc w3-text-white"></i></div>
            </div>
            <div className="w3-row  ">
                <div className="w3-col w3-margin" style={{ width: '48px'} }>
                <img  src={category.icon} alt="cat_imege" width="100%"/>
                </div>
                <div className="w3-rest w3-margin ">
                    <h6 className='w3-text-white' style={{margin:0}}>{category.name}</h6>
                    <p className="w3-text-white" style={{fontSize:'10px',margin:0,lineHeight: '110%'}}>{category.description}</p>
                </div>

            </div>
        </div>
        <ProductList/>
        </div>

=======
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
>>>>>>> ce5550891bd7c0af1853cf311a6db7246a050391
    )
}

export default CategoryPage
