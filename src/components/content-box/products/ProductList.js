import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress';
import Product from './Product'

import { fetchProductsListByCategory } from '../../../firebase/apis/product'
import { useFetchCollection } from '../../../hooks/useFetch'
const ProductList = ({ category_name }) => {
    const filter = [{ collection: 'category', doc_id: category_name, key: 'category', operator: '==' }]
    const { data: products, isPending, error } = useFetchCollection('products', filter,500)
    const convertToDateString=(timestemp)=>{
        return new Date(timestemp.seconds*1000).toLocaleDateString();
    }
    return (
        isPending ?
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
            :
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    products && products.map(prod => (
                        <Product key={prod.id} id={prod.id}/>
                    ))
                }
            </Box>
    )
}

export default ProductList
