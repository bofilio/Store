import React from 'react'
import NavBare from '../nav-box/NavBar'
import TemporaryDrawer from '../nav-box/Drawer'
import CategoriesList from '../content-box/categories/CategoriesList'
import Carosel from '../content-box/news/NewsCarosel';
import Hspace from '../toolsBox/Hspace'
import FloatingCart from '../toolsBox/FloatingCart'
import { Box } from '@mui/system';
import News from '../content-box/news/News';
const Home = () => {

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <NavBare />
            <TemporaryDrawer />
            <Hspace mt={4} />
            <span>News</span>
            <Box p={1} mr={1} ml={1}>
                <News/>
            </Box>
            <Hspace mt={4} />
            <span>Categories</span>
            <CategoriesList />
            <FloatingCart />
        </div>
    )
}

export default Home
