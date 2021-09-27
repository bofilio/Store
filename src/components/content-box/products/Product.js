import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { CardActions } from '@mui/material';
const ProductCard = styled(Card)(({ theme }) => ({
    maxWidth: 180,
    // Override media queries injected by theme.mixins.toolbar
    '@media (max-width:392px)': {
        maxWidth: '100%',
    },
}));
const ProductBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    '@media (min-width:392px)': {
        flexDirection: 'column',
    },
}));

const Product = ({product}) => {
    return (
        <Link to={product.id} style={{textDecoration:'none'}}>
            <ProductCard sx={{ m: 1 }}>
                <ProductBox sx={{}}>
                    <CardMedia sx={{ maxHeight: 180,flexGrow:1, justifyContent: 'center', display: 'flex' }}>
                        <img src={product.images && product.images[0]} style={{ height: "auto", width: "100%" }} />
                    </CardMedia>
                    <Box sx={{ p: 1 , flexGrow:3}} >
                        <Box sx={{ maxHeight: '100px', overflowY: 'hidden' }}>
                            <Typography gutterBottom variant="h6" noWrap component="div">
                                {product.price}
                            </Typography>
                            <Typography variant="body2" component="div" color="text.secondary">
                                {product.description}
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