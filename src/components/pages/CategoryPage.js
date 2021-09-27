import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SortIcon from '@mui/icons-material/Sort';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductList from '../content-box/products/ProductList'
import FloatingSearch from '../toolsBox/FloatingSearch';
import { fetchCategoryByName } from '../../firebase/apis/category';

const CategoryPage = () => {
    const history=useHistory();
    const [category,setCategory]=useState(null);
    const { category_name } = useParams();
    console.log(category_name)
    useEffect(async() => {
        
        const cat= await fetchCategoryByName(category_name);
        setCategory(cat);

    }, [])
   
    return (
        category?
        <Box>
            <AppBar position="static" >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', pr: 1, pl:1}}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={()=>{history.goBack()}}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SortIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="display more actions" edge="end" color="inherit" >
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 1 }}>
                    <Box mr={2}><img src={category.icon} /></Box>
                    <Box>
                    <Typography variant="h6" noWrap component="div">
                            {category.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontSize:"12px"}}  component="span">
                        {category.brief}
                    </Typography>
                    </Box>
                </Box>
            </AppBar>
            <ProductList category_name={category.name}/>
            <FloatingSearch/>
        </Box>
        :
        <></>
        
    )
}

export default CategoryPage
