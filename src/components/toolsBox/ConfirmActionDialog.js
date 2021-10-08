import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch,useSelector } from 'react-redux';
import { uiActionCreators } from '../../state/ui/action-creators';
import { bindActionCreators } from 'redux';
const ConfirmActionDialog = ({ title,message}) => {
    const opened = useSelector(state => state.nav.opened_dialog)
    console.log(opened)
    const dispatch = useDispatch();
    const { toggleDeleteDialog } = bindActionCreators(uiActionCreators, dispatch);
   
    
    const handleConfirm=()=>{
        toggleDeleteDialog(false);
        //le rest 
    }

    return (
        <div> 
            <Dialog open={opened} onClose={() => toggleDeleteDialog(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm}>Yes</Button>
                    <Button onClick={() => toggleDeleteDialog(false)} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ConfirmActionDialog;