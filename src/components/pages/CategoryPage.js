import React from 'react'
import { styled } from '@mui/material/styles';
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
const CategoryPage = () => {
    const history=useHistory();
    return (
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
                    <Box mr={2}><img src="static/imgs/tshirt.png" /></Box>
                    <Box>
                    <Typography variant="h6" noWrap component="div">
                            Fashion
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontSize:"12px"}}  component="span">
                        the dimension of the element doesn't impact the rest of the page
                    </Typography>
                    </Box>
                </Box>
            </AppBar>
            <ProductList/>
            <FloatingSearch/>
        </Box>
        

    )
}

export default CategoryPage
