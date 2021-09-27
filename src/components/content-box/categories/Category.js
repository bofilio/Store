import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Category({category}) {
    return (
        <Link to= {'/category/'+category.name+"/"}  style={{ textDecoration: 'none' }}>
            <Card sx={{ display: "flex" }}>
                <div style={{ padding: "10px", Height: "64px",minHeight: "64px", backgroundColor: category.color }}>
                    <CardMedia component="img" height="auto" sx={{ maxWidth: 64,minWidth:64 }} image={category.icon} alt="green iguana" />
                </div>
                <Box pl={1} pr={1}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ m: 0, fontSize: "16px" }}>
                        {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category.brief}
                    </Typography>
                </Box>
            </Card>
        </Link>

    );
}