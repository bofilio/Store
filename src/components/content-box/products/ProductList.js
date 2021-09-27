import { Box } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress';
import Product from './Product'
import { useFetchCollection } from '../../../hooks/useFetch'
const ProductList = ({ category_name }) => {
    const filter = [{ collection: 'category', doc_id: category_name, key: 'category', operator: '==' }]
    const { data: products, isPending, error } = useFetchCollection('products', filter,500)
    
    return (
        isPending ?
            <Box sx={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
            :
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    products && products.map(product => (
                        <Product key={product.id} product={product}/>
                    ))
                }
            </Box>
    )
}

export default ProductList
