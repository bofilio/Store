import React from 'react'
import NavBare from '../NavBox/NavBar'
import TemporaryDrawer from '../NavBox/Drawer'
import CategoriesList from '../contentBox/categories/CategoriesList'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const Home = () => {
    return (
        <div style={{ height: '100%' }}>
            <NavBare />
            <TemporaryDrawer />
            <CategoriesList />
            <Fab color="primary" sx={{position:'absolute', bottom:40, right:10}} aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default Home
