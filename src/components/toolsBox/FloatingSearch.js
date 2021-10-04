import React, { useEffect, useState } from 'react'
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const FloatingSearch = () => {
    const [animationclass, setAnimationclass] = useState("")

    var scrollhandler;
    const handleScroll = () => {

        const sy = Math.floor(window.scrollY);
        //const anim_class=sy < 90?"animate__animated animate__bounceInUp":"animate__animated animate__bounceOutDown"
        setAnimationclass(animationclass?"animate__animated animate__bounceOutDown":"");
        //setAnimationclass(anim_class);
        window.clearTimeout(scrollhandler);
        scrollhandler=setTimeout(function(){ setAnimationclass("animate__animated animate__bounceInUp"); }, 500);

    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setAnimationclass("animate__animated animate__bounceInUp");
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
   
    return (
        <Link to="/search" style={{textDecoration:"none"}}>
            {
                animationclass?
                    <div className={animationclass}  style={{ position: 'fixed', bottom: 30, right: 20 }} >
                        <Fab color='primary' aria-label="add">
                            <SearchIcon/>
                        </Fab>
                    </div>
                    :
                    <></>

            }
        </Link>
    )
}

export default FloatingSearch;
