import React from 'react'
import Product from './Product'
import FakeDatabase from '../data/data'
import MyColors from '../util/colors'
import { StyleRoot } from 'radium'

const ProductList = ({ color }) => {
    const products = FakeDatabase.products;
    const styles = {
        main: {
            display: 'flex',
            //justifyContent:'center',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
            padding: '8px'
        },
    }

    return (
        <div style={{ height: '100%', backgroundColor: MyColors.light_bg }}>
            <StyleRoot>
                <div style={styles.main}>
                    {
                        products.map(prod => (

                            <Product key={prod.id} price_color={color} image={prod.image} title={prod.title} price={prod.price} />

                        ))
                    }
                </div>
            </StyleRoot>
        </div>
    )
}

export default ProductList
