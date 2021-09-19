import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    return (
        <Card  sx={{ mt:1, display:"flex" }}>
                <div style={{padding:"10px",maxHeight:"84px",backgroundColor:'green'}}>
                <CardMedia component="img" height="auto" sx={{maxWidth:64}} image="/static/imgs/logo.png" alt="green iguana" />
                </div>
                
                <Box pl={1}>
                    <Typography gutterBottom variant="h6" component="div" sx={{m:0,fontSize:"16px"}}>
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles.
                    </Typography>
                </Box>
            
        </Card>
    );
}