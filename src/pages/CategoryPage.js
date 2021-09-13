import React from 'react'
import { useParams } from 'react-router'
import FakeDatabase from '../data/data';
import ProductList from '../components/ProductList';
import BackButton from '../components/common/BackButton';
const CategoryPage = () => {
    let {name} = useParams();
    let category= FakeDatabase.getCategoryByName(name);
    
    return (
        <div style={{height:'100%'}}>
        <div className="w3-block w3-padding-left" style={{height:'120px', backgroundColor:category.color}}>
            <div className="w3-bar" style={{padding:0,fontSize:"16px"}}>
                <div className="w3-bar-item"><BackButton/></div>
                <div className="w3-bar-item w3-right"><i className="fa fa-cart-arrow-down w3-text-white"></i></div>
                <div className="w3-bar-item w3-right" ><i className="fa fa-sort-amount-desc w3-text-white"></i></div>
            </div>
            <div className="w3-row  ">
                <div className="w3-col w3-margin" style={{ width: '48px'} }>
                <img  src={category.icon} alt="cat_imege" width="100%"/>
                </div>
                <div className="w3-rest w3-margin ">
                    <h6 className='w3-text-white' style={{margin:0}}>{category.name}</h6>
                    <p className="w3-text-white" style={{fontSize:'12px',margin:0,lineHeight: '110%'}}>{category.description}</p>
                </div>

            </div>
        </div>
        <ProductList color={category.color}/>
        </div>
    )
}

export default CategoryPage
