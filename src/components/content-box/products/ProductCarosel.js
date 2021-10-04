import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
const ProductCarosel = ({ images }) => {
    const img_style = {
        height: '200px',
        width: 'auto'
    }
    return (
        <Box >
            <Card>
                <CardMedia>
                    <Carousel showArrows={true} stopOnHover showThumbs={false} autoPlay interval={2000} emulateTouch infiniteLoop statusFormatter={() => { }}>
                        {
                            images.map((image,index)=> (
                                <img key={index} src={image} alt="procuct img" style={img_style} />  
                            ))
                        }
                    </Carousel>
                </CardMedia>
                <CardActions>
                    <Button size="small">go to details for farther details..</Button>
                </CardActions>
            </Card>
        </Box>

    );
}

export default ProductCarosel