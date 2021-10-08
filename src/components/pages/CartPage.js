import React from 'react'
import { useHistory } from 'react-router';
import { Box } from '@mui/system'
import { IconButton } from '@mui/material'
import { AppBar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CartList from '../content-box/cart/CartList';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import ConfirmActionDialog from '../toolsBox/ConfirmActionDialog';
import { bindActionCreators } from 'redux';
import { uiActionCreators } from '../../state/ui/action-creators';
const CartPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { toggleDeleteDialog } = bindActionCreators(uiActionCreators, dispatch);
    return (
        <div >
            <AppBar position="static">
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pr: 1 }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="h6" noWrap component="div">
                            Shoping Cart
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton size="large" aria-label="search" color="inherit" onClick={() => toggleDeleteDialog(true)}>
                        <DeleteIcon />
                    </IconButton>
                    <ConfirmActionDialog title="Confirm Deletion!" message="you sure you want to delete this?" />
                    <IconButton size="large" aria-label="search" color="inherit">
                        <AssignmentTurnedInIcon />
                    </IconButton>
                </Box>
            </AppBar>
            <CartList />

            <Button   sx={{backgroundColor:"#FFF", p: 1.5, width: "100%", position: 'fixed', bottom: 0,display:'flex' }}>
                <span style={{ fontSize: '12px' }}>Subtotal<span style={{ color: "#333" }}> (Befor tax)</span></span>
                <span style={{flexGrow:1}}></span>
                <span style={{ color: 'green', fontSize: "16px" }}>78.45 $</span>
            </Button>

        </div>

    )
}
export default CartPage
