import React, { useEffect, useState } from 'react'
import Fab from '@mui/material/Fab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const FloatingButton = () => {
    const [animationclass, setAnimationclass] = useState("")
    const offset=75;
    const handleScroll = () => {
        const sy = Math.floor(window.scrollY);
        const anim_class=sy < 90?"animate__animated animate__bounceInUp":"animate__animated animate__bounceOutDown"
        setAnimationclass(anim_class);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
   
    return (
        <>
            {
                
                    <div className={animationclass}  style={{ position: 'fixed', bottom: 30, right: 20 }} >
                        <Fab sx={{backgroundColor:'#EBC999'}} aria-label="add">
                            <AddShoppingCartIcon />
                        </Fab>
                    </div>

            }
        </>
    )
}

export default FloatingButton
