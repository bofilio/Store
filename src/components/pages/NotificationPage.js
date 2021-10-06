import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Box } from '@mui/system'
import { IconButton } from '@mui/material'
import { AppBar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsList from '../content-box/notifications/NotificationsList';
import ConfirmActionDialog from '../toolsBox/ConfirmActionDialog';
import { bindActionCreators } from 'redux';
import { navActionCreators } from '../../state/ui/action-creators';
const NotificationPage = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { toggleDeleteDialog } = bindActionCreators(navActionCreators, dispatch);
    return (
        <div>
            <AppBar position="static">
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pr: 1 }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="h6" noWrap component="div">
                            Notifications
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton size="large" aria-label="search" color="inherit" onClick={() => toggleDeleteDialog(true)}>
                        <DeleteIcon />
                    </IconButton>
                    <ConfirmActionDialog title="Confirm Deletion!" message="you sure you want to delete this?" />
                </Box>
            </AppBar>
            <NotificationsList />
        </div>
    )
}

export default NotificationPage
