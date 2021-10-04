import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Button, IconButton } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Dialog from '@mui/material/Dialog';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function CartItem({ item }) {
    const stock=10;
    const [count, setcount] = useState(1);
    const [open, setOpen] = React.useState(false);
    const hundleCount=(amount)=>{  
        let newcount=count+amount;
        console.log(newcount)
        newcount=newcount<1?1:newcount;
        newcount=newcount>stock?stock:newcount
        setcount(newcount);
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
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
        <a href="#" style={{ textDecoration: 'none' }} >
            <Card sx={{ display: "flex", alignItems: "flex-start" }} onClick={handleClickOpen}>
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
                            <FileCopyIcon sx={styles.smalltext}/> <span style={styles.smalltext}>{count} item(s)</span>
                        </span>
                        <i style={{ flexGrow: 1 }}></i>
                       <span style={styles.pricetext}>
                         {item.price}
                       </span> 
                    </Box>
                </Box>
            </Card>
            
            <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <Typography variant="subtitle2" component="span" sx={{ p: 1 }}>
                    Product title
                </Typography>
                <Box sx={{ p: 1, display: 'flex', flexDirection: 'column' }} component="div">
                    <Box sx={{ position: "relative" }} component="div">
                        <FileCopyIcon sx={{ fontSize: 12 }} /> <span style={{ fontSize: 10 }}>QUANTITY</span>
                        <span style={{ float: 'right', fontSize: 10 }}>Stock:33</span>
                    </Box>
                    <Box sx={{ display: "flex",alignItems:'center', p: 1,mt:1, backgroundColor: "#EEE" }} component="div">
                        <IconButton color='primary' onClick={()=>hundleCount(-1)}><IndeterminateCheckBoxIcon/></IconButton>
                        <span style={{flexGrow:1,textAlign:"center"}}>{count}</span>
                        <IconButton color='primary' onClick={()=>hundleCount(1)}><AddBoxIcon/></IconButton>
                    </Box>
                </Box>
                <DialogActions>
                    <Button onClick={handleClose} >DELETE</Button>
                    <Button onClick={handleClose} autoFocus>SAVE</Button>
                </DialogActions>
            </Dialog>


        </a>

    );

  
}