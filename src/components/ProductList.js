import React from 'react'
import Product from './Product'
import FakeDatabase from '../data/data'
import MyColors from '../util/colors'

const ProductList = () => {
    const products=FakeDatabase.products;
    const styles={
        main:{
            display: 'flex',
            justifyContent:'center',
            flexWrap: 'wrap',
            width:'100%',
           
            height:'100%',
        },
    }
    
    return (
        <div style={{display:'block', height:'100%', backgroundColor:MyColors.light_bg}}>
        <div style={styles.main}>
            {
                products.map(prod=>(
                    <Product image={prod.image} title={prod.title} price={prod.price} />
                ))
            }
        </div>
        </div>
    )
}

export default ProductList
