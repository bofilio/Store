import React,{useState} from 'react'
import { Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions } from '@mui/material'
import { Button } from '@mui/material'
const AboutDialog = (props) => {
    const [open,setOpen] = useState(false)
    const handleClose=()=>{
        setOpen(false);
    }
    
    return (
        <Dialog open={open || props.open} onClose={ handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <div style={{display:'flex',justifyContent:'center', padding:'26px', backgroundColor:'green'}}>
                <img src="/static/imgs/logo.png" alt="logo" height="64" />
            </div>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   text
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AboutDialog
