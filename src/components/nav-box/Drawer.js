import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActionCreators } from '../../state/ui/action-creators';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Hspace from '../toolsBox/Hspace'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@mui/material'
import { Button } from '@mui/material'

export default function TemporaryDrawer() {
    const [openAbout, setOpenAbout] = useState(false)
    const CloseAbout = () => {
        setOpenAbout(false);
    }
    const OpenAbout = () => {
        setOpenAbout(true);
    }
    const opened = useSelector(state => state.nav.opened)
    const dispatch = useDispatch();
    const { toggleDrawer } = bindActionCreators(navActionCreators, dispatch);
    const styles = {
        logobox: {
            height: 180,
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#caf0f8'
        }
    }
    const top_menu = [
        {
            label: "Wishlist",
            icon: <BookmarkIcon />,
            url: '/wishlist',
        },
        {
            label: "Notifications",
            icon: <NotificationsActiveIcon />,
            url: '/notifications',
        },

    ];
    const botttom_menu = [
        {
            label: "Settings",
            icon: <SettingsIcon />,
            url: '/settings',
        },
        {
            label: "Instructions",
            icon: <HelpIcon />,
            url: '/guid',
        },

    ];

    const list = () => (
        <Box sx={{ width: 260 }} role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)} >
            <Box sx={styles.logobox}>
                <img src="/static/imgs/logo.png" style={{ width: "25%", height: "auto" }} alt="logo" />
                <Hspace mt={1} />
                <span style={{ color: '#264653' }}>logo</span>
            </Box>

            <List>
                {top_menu.map((element, index) => (
                    <Link to={element.url} style={{ textDecoration: 'none' }} key={index}>
                        <ListItem button >
                            <ListItemIcon>
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.label} sx={{ color: "#264653" }} /><Badge badgeContent={4} color="default"></Badge>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {botttom_menu.map((element, index) => (
                    <Link to={element.url} style={{ textDecoration: 'none' }} key={index}>
                        <ListItem button >
                            <ListItemIcon>
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.label} sx={{ color: "#264653" }} />
                        </ListItem>
                    </Link>
                ))}
                <ListItem button onClick={OpenAbout}>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" sx={{ color: "#264653" }} />
                </ListItem>

            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <Drawer anchor='left' open={opened} onClose={() => toggleDrawer(false)}>
                    {
                        list()
                    }
                </Drawer>

            </React.Fragment>
            <Dialog fullWidth open={openAbout} onClose={CloseAbout} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <div style={{ display: 'flex', justifyContent: 'center', padding: '26px', backgroundColor: 'green' }}>
                    <img src="/static/imgs/logo.png" alt="logo" height="64" />
                </div>
                <DialogContent>
                    <Typography variant="h6">About</Typography>
                    <DialogContentText id="alert-dialog-description">
                    I'm still on a hunt for a fix to get the comment shortcut 
                    working - or even a small package that would toggle them on and off. 
                    If anyone is interested in working on this
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={CloseAbout}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}