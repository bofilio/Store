import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
const Carosel = () => {
    const img_style = {
        height: '200px',
        width: 'auto'
    }
    return (
        <Box p={1}>
            <Card>
                <CardMedia>
                    <Carousel showArrows={true} stopOnHover showThumbs={false} autoPlay interval={2000} emulateTouch infiniteLoop statusFormatter={() => { }}>
                        <div>
                            <img src="static/imgs/logo.png" alt="img1" style={img_style} />
                        </div>
                        <div>
                            <img src="static/imgs/logo.png" alt="img1" style={img_style} />

                        </div>
                        <div>
                            <img src="static/imgs/logo.png" alt="img1" style={img_style} />

                        </div>
                    </Carousel>
                </CardMedia>
                <CardActions>
                    <Button size="small">go to details for farther details..</Button>
                </CardActions>
            </Card>
        </Box>

    );
}

export default Carosel