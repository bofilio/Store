import React from 'react'
import { useHistory } from 'react-router';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SortIcon from '@mui/icons-material/Sort';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Carosel from '../Carosel';
import Badge from '@mui/material/Badge';

const ProductDetails = () => {
    const history = useHistory();
    return (
        <Box sx={{ backgroundColor: 'white' }}>
            <AppBar position="static" >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1,pr:1 }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer"  onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton sx={{ mr: "4px" }} size="large" aria-label="display more actions" edge="end" color="inherit" >
                        <Badge badgeContent={4} color="default">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <BookmarkIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 1 }}>
                    <Box>
                        <Typography variant="h6" noWrap component="div">
                            Fashion
                        </Typography>
                    </Box>
                </Box>

            </AppBar>
            <Box>
                <Carosel />
                <Box sx={{ p: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" mb={0} noWrap component="div">
                            73.56 USD
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Typography variant="button" sx={{ backgroundColor: "#c7c1c1", color: 'green' }} p="4px" noWrap component="div" mr={1} mb={0} >
                            In stock
                        </Typography>
                    </Box>
                    <Typography gutterBottom variant="subtitle2" noWrap component="p" sx={{ fontSize: "12px", color: '#454545' }} >
                        January 29,2021 09:05
                    </Typography>
                    <Divider sx={{ m: 2 }} />
                    <Box>
                        <Typography variant="body1" component="p">
                            Lizards are a widespread group of squamate Lizards are a w of   Lizards are a widespread group of squamate Lizards are a w of squamate Lizards are a  squamate Lizards are a widespread group of squamate
                            Lizards are a widespread group of squamate Lizards are a w of   Lizards a Lizards are a widespread group of squamate Lizards are a w of   Lizards a
                        </Typography>
                    </Box>
                    <Divider sx={{ m: 2 }} />
                    <Box mb={6}>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: '#454545', fontSize: '14px' }} mb={0} noWrap component="div">
                            Category :
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" sx={{ fontSize: '12px' }} noWrap component="div" mr={1} mb={0} >
                            Fashion
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Button variant="contained" sx={{ p: "12px", width: "100%", position: 'fixed', bottom: 0, borderRadius: '0px' }}>
                <AddShoppingCartIcon sx={{ ml: 2 }} /> Add to Cart
            </Button>
        </Box>
    )
}

export default ProductDetails
