import { Box } from '@mui/system'
import React from 'react'
import Product from './Product'

const ProductList = () => {
    return (
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            <Product key="1"/>
            <Product key="2"/>
            <Product key="3"/>
            <Product key="4"/>
            <Product key="5"/>
            <Product key="6"/>
        </Box>
    )
}

export default ProductList
