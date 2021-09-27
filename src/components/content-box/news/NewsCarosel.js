import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const NewsCarosel = ({ news }) => {
    const img_style = {
        height: '200px',
        minHeight:'200px',
        width: 'auto',
    }
    return (
        <Box sx={{minHeight:"200px"}}>
            <Card>
                <CardMedia>
                    <Carousel showArrows={true} stopOnHover showThumbs={false} autoPlay interval={2000} emulateTouch infiniteLoop statusFormatter={() => { }}>
                        {
                            news.map((n, index) => (
                                <Link key={index} to={"news/" + n.id}>
                                    <img  src={n.image} alt="news img" style={img_style} />
                                </Link>
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

export default NewsCarosel
