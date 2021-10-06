import React, { useEffect, useState } from 'react'
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
import CircularProgress from '@mui/material/CircularProgress';
import { useFetchDocument } from '../../hooks/useFetch';
import Dialog from '@mui/material/Dialog';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';
const CategoryPage = () => {
    const history = useHistory();
    const { category_name } = useParams();
    const { data: category, isPending, error } = useFetchDocument('category', category_name, 500);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCheck = () => {
        handleClose();
        //le rest du code
    };

    return (
        isPending ?
            <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
            :
            category ?
                <Box>
                    {/* AppBar */}
                    <AppBar position="static">
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', pr: 1, pl: 1 }}>
                            {/* this is for going back to previous page */}
                            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <IconButton size="large" aria-label="search" color="inherit" onClick={handleClickOpen}>
                                <SortIcon />
                            </IconButton>
                            <Link to="/cart" style={{textDecorationColor: 'white' }}>
                                <IconButton size="large" aria-label="display more actions" edge="end" sx={{color:"#EEE"}} >
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 1 }}>
                            <Box mr={2}><img src={category.icon} /></Box>
                            <Box>
                                <Typography variant="h6" noWrap component="div">
                                    {category.name}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontSize: "12px" }} component="span">
                                    {category.brief}
                                </Typography>
                            </Box>
                        </Box>
                    </AppBar>
                    {/* Product List component */}
                    <ProductList category_name={category.name} />
                    {/* this is gloating button to navigate to search page */}
                    <FloatingSearch />
                    {/*this Dialog is opend with sorting icon in the Appbar */}
                    <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                        <Box p={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Product Sort</FormLabel>
                                <RadioGroup aria-label="Sort" defaultValue="new to old" name="radio-buttons-group">
                                    <FormControlLabel value="new to old" control={<Radio />} label="Time: New to Old" onClick={handleCheck} />
                                    <FormControlLabel value="old to new" control={<Radio />} label="Time: Old To New" onClick={handleCheck} />
                                    <FormControlLabel value="low to hight" control={<Radio />} label="Price: Low to Hight" onClick={handleCheck} />
                                    <FormControlLabel value="hight to low" control={<Radio />} label="Price: Hight to Low" onClick={handleCheck} />
                                    <FormControlLabel value="discount" control={<Radio />} label="Discount First" onClick={handleCheck} />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Dialog>
                </Box>
                :
                <></>

    )
}

export default CategoryPage
