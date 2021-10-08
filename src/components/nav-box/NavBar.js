import * as React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uiActionCreators } from '../../state/ui/action-creators';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from '../toolsBox/SearchInput'

export default function NavBare() {
    const dispatch = useDispatch();
    const { toggleDrawer } = bindActionCreators(uiActionCreators, dispatch);
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar >
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 1 }} onClick={()=>toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
                        Logo
                    </Typography>
                    <SearchInput/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}