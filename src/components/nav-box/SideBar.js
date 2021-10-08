import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uiActionCreators } from '../../state/ui/action-creators';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Hspace from '../toolsBox/Hspace'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { Dialog, DialogContent, DialogContentText, DialogActions, Typography, Stack } from '@mui/material'
import { Button } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import { menu } from '../settings.js/menu';

const Logobox = styled('div')(({ theme }) => ({
    height: theme.spacing(20),
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main
}));
const ImageLogo = styled('img')(({ theme }) => ({
    width: "auto",
    height: "50%",
    marginBottom:theme.spacing(1)
}));
const SideBarWraper = styled('div')(({ theme }) => ({
    width: '75vw',
    maxWidth:theme.spacing(40)
}));

const SideBar = () => {
  
    const opened = useSelector(state => state.ui.opened)
    const dispatch = useDispatch();
    const { toggleDrawer } = bindActionCreators(uiActionCreators, dispatch);
   
    const list = () => (
        <SideBarWraper role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)} >
            <Logobox>
                <ImageLogo src="/static/imgs/logo.png" alt="logo" />
                <span>logo</span>
            </Logobox>
            <List>
                {menu.top_menu.map((element, index) => (
                    <Link to={element.url} style={{ textDecoration: 'none' }} key={index}>
                        <ListItem button >
                            <ListItemIcon>
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.label} /><Badge badgeContent={4} color="default"></Badge>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {menu.botttom_menu.map((element, index) => (
                    <Link to={element.url} style={{ textDecoration: 'none' }} key={index}>
                        <ListItem button >
                            <ListItemIcon>
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.label}  />
                        </ListItem>
                    </Link>
                ))}
              

            </List>
        </SideBarWraper>
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
        </div>
    );
}
export default SideBar;