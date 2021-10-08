import React from 'react'
import { useHistory } from 'react-router';
import { Box, display, style } from '@mui/system'
import { AppBar } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { styled } from '@mui/system'



const AboutPage = () => {
    return (
        <AppBar position="static">
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pr: 1 }}>
                <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                    <ArrowBackIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}></Box>
                <SearchInput sx={{ width: "100%" }} />
            </Box>
        </AppBar>
    )
}

export default AboutPage
