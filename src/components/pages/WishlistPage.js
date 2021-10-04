import React from 'react'
import { useHistory } from 'react-router';
import { Box } from '@mui/system'
import { IconButton } from '@mui/material'
import { AppBar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Wishlist from '../content-box/wishlist/Wishlist';
const WishlistPage = () => {
    const history = useHistory()
    return (
        <div >
            <AppBar position="static">
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pr: 1 }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="h6" noWrap component="div">
                            Wishlist
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <DeleteIcon />
                    </IconButton>
                    
                </Box>
            </AppBar>
            <Wishlist/>

        </div>

    )
}
export default WishlistPage
