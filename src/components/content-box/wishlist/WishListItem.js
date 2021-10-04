import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Link } from 'react-router-dom';
export default function WishListItem({ item }) {
    const  styles={
        smalltext:{
            fontSize:"10px",
            color:"#777"
        },
        pricetext:{
            fontSize:"11px",
            color:"green"
        }
    }
    return (
        <Link to="/category/Babies/ehJb4w4Hig6VolTlc04g" style={{ textDecoration: 'none' }} >
            <Card sx={{ display: "flex", alignItems: "flex-start" }} >
                <div style={{ flexBasis: "48px", flexShrink: 0 }}>
                    <CardMedia component="img" sx={{ maxWidth: 48, width: 48, height: 48 }} image={item.image} alt="item img" />
                </div>
                <Box pl={1} pr={1} sx={{ height: 48, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h6 sx={{ p:1, fontSize: "16px" }}>
                        {item.name}
                    </h6>
                    <i style={{ flexGrow: 1 }}></i>
                    <Box sx={{pb:0.5, display: 'flex', flexDirection: 'row', alignItems: "flex-end" }}>
                        <span  style={{ display: "flex", alignItems: "center" }}>
                            <FileCopyIcon sx={styles.smalltext}/> <span style={styles.smalltext}>Sep,22 ,2021</span>
                        </span>
                        <i style={{ flexGrow: 1 }}></i>
                       <span style={styles.pricetext}>
                         {item.price}
                       </span> 
                    </Box>
                </Box>
            </Card>   
        </Link>

    );
}