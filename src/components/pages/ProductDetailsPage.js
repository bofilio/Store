import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ProductCarosel from '../content-box/products/ProductCarosel'
import Badge from '@mui/material/Badge';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetchDocument } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { id, category_name } = useParams();
    const history = useHistory();
    const { data: product, isPending, error } = useFetchDocument('products', id, 500);
    // if (product) product["last_update"]=new Date(product.last_update.seconds*1000).toLocaleDateString();
    const convertToDateString = (timestemp) => {
        return new Date(timestemp.seconds * 1000).toLocaleString();
    }
    return (
        isPending ?
            <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
            :
            product ?
                <Box sx={{ backgroundColor: 'white' }}>
                    <AppBar position="static" >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1, pr: 1 }}>
                            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <Link to="/cart" >
                                <IconButton sx={{ mr: "4px",color:"white" }} size="large" aria-label="display more actions" edge="end" color="inherit" >
                                    <Badge badgeContent={4} color="default">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <Link to="/wishlist" >
                            <IconButton size="large" aria-label="search" sx={{color:'white'}}>
                                <BookmarkIcon />
                            </IconButton>
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 1 }}>
                            <Box>
                                <Typography variant="h6" noWrap component="div">
                                    {product.name}
                                </Typography>
                            </Box>
                        </Box>

                    </AppBar>
                    <Box>
                        <ProductCarosel images={product.images} />
                        <Box sx={{ p: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6" mb={0} noWrap component="div">
                                    {product.price}
                                </Typography>
                                <Box sx={{ flexGrow: 1 }}></Box>
                                <Typography variant="button" sx={{ backgroundColor: "#c7c1c1", color: 'green' }} p="4px" noWrap component="div" mr={1} mb={0} >
                                    {product.status}
                                </Typography>
                            </Box>
                            <Typography gutterBottom variant="subtitle2" noWrap component="p" sx={{ fontSize: "12px", color: '#454545' }} >
                                {convertToDateString(product.last_update)}
                            </Typography>
                            <Divider sx={{ m: 2 }} />
                            <Box>
                                <Typography variant="body1" component="p">
                                    {product.description}
                                </Typography>
                            </Box>
                            <Divider sx={{ m: 2 }} />
                            <Box mb={6}>
                                <Typography gutterBottom variant="subtitle1" sx={{ color: '#454545', fontSize: '14px' }} mb={0} noWrap component="div">
                                    Category :
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" sx={{ fontSize: '12px' }} noWrap component="div" mr={1} mb={0} >
                                    {category_name}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button variant="contained" sx={{ p: "12px", width: "100%", position: 'fixed', bottom: 0, borderRadius: '0px' }}>
                        <AddShoppingCartIcon sx={{ ml: 2 }} /> Add to Cart
                    </Button>
                </Box>
                :
                <></>
    )
}

export default ProductDetailsPage
