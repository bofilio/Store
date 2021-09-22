import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, CardActions } from '@mui/material';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const ProductCard = styled(Card)(({ theme }) => ({
    maxWidth: 180,
    // Override media queries injected by theme.mixins.toolbar
    '@media (max-width:392px)': {
        maxWidth: '100%',
    },
}));
const ProductBox = styled(Box)(({ them }) => ({
    display: 'flex',
    flexDirection: 'row',
    '@media (min-width:392px)': {
        flexDirection: 'column',
    },
}));

const Product = () => {
    return (
        <Link to="category/details" style={{textDecoration:'none'}}>
            <ProductCard sx={{ m: 1 }}>
                <ProductBox>
                    <CardMedia sx={{ maxHeight: 180, justifyContent: 'center', display: 'flex' }}>
                        <img src="static/imgs/jean.jpg" style={{ height: "auto", width: "100%" }} />
                    </CardMedia>
                    <Box sx={{ p: 1 }}>
                        <Box sx={{ maxHeight: '100px', overflowY: 'hidden' }}>
                            <Typography gutterBottom variant="h6" noWrap component="div">
                                73.56 USD
                            </Typography>
                            <Typography variant="body2" component="div" color="text.secondary">
                                Lizards are a widespread group of squamate Lizards are a w of squamate Lizards are a widespread group of squamate
                            </Typography>
                        </Box>
                        <CardActions sx={{ p: 0 }}>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShoppingCartIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </ProductBox>

            </ProductCard>
        </Link>

    );
}

export default Product;