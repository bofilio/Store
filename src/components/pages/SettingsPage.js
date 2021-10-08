import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AppBar, Box, Typography, IconButton, Switch, Divider, TextField, Autocomplete } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CurrencyAutoCompleet from '../toolsBox/CurrencyAutoCompleet'
import { uiActionCreators } from '../../state/ui/action-creators';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

const Settings = () => {
    const mode=useSelector(state => state.ui.mode)
    const history = useHistory();
    const dispatch = useDispatch();
    const { toggleThemeMode } = bindActionCreators(uiActionCreators, dispatch);
    const switchThemeMode = (event) => {
        const theme=event.target.checked?'dark':'light';
        toggleThemeMode(theme);
        
      };
    return (
        <Box sx={{ backgroundColor: "white", minHeight: '100vh' }}>
            <AppBar position="static" >
                <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
                        Settings
                    </Typography>
                </Box>
            </AppBar>
            <Box mt={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} p={1}>
                    <Typography variant="p" noWrap component="div" sx={{ ml: 2, color: "darkslategray" }}>
                        Dark mode
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <Switch checked={mode==="dark"} onChange={switchThemeMode}/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }} p={1}>
                    <Typography variant="p" noWrap component="div" sx={{ ml: 2, color: "darkslategray" }}>
                        Notifications
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <Switch defaultChecked />
                </Box>
                <Divider sx={{ ml: 2, mr: 2 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }} p={1}>
                    <Typography variant="p" noWrap component="div" sx={{ ml: 2, color: "darkslategray" }}>
                        Currnecy
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <CurrencyAutoCompleet />
                </Box>
                <Divider sx={{ ml: 2, mr: 2 }} />

            </Box>
        </Box>

    )
}

export default Settings
