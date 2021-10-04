import React, { useEffect, useState } from 'react'
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const FloatingCart = () => {
    const [animationclass, setAnimationclass] = useState("")
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
                <Link to="/cart">
                <div className={animationclass}  style={{ position: 'fixed', bottom: 30, right: 20 }} >
                        <Fab color='primary' aria-label="add">
                            <ShoppingCartIcon />
                        </Fab>
                    </div>
                </Link>
            }
        </>
    )
}

export default FloatingCart
