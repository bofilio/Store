import React from 'react'
import NavBare from '../nav-box/NavBar'
import TemporaryDrawer from '../nav-box/Drawer'
import CategoriesList from '../content-box/categories/CategoriesList'
import Carosel from '../content-box/Carosel';
import Hspace from '../toolsBox/Hspace'
const Home = () => {
    
    return (
        <div style={{ height: '100%',width:'100%' }}>
            <NavBare />
            <TemporaryDrawer />
            <Hspace mt={4}/>
            <Carosel />
            <Hspace mt={6}/>
            <CategoriesList />
        </div>
    )
}

export default Home
