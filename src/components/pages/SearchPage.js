import React from 'react'
import { useHistory } from 'react-router';
import { Box } from '@mui/system'
import { AppBar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const SearchPage = () => {
    
    const history = useHistory()
    const products = [
        { title: 'The Shawshank Redemption', price: 1994 },
        { title: 'The Godfather', price: 1972 },
        { title: 'The Godfather: Part II', price: 1974 },
        { title: 'The Dark Knight', price: 2008 },
        { title: '12 Angry Men', price: 1957 },
        { title: "Schindler's List", price: 1993 },
        { title: 'Pulp Fiction', price: 1994 },
    ];
     
    return (
        <div >
            <AppBar position="static">
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pr: 1 }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1}} >
                        <Autocomplete freeSolo id="free-solo-2-demo" disableClearable sx={{alignItems:"center"}}
                            options={products.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField {...params} label="Search input" style={{ border: '0' }}
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        
                                    }}
                                />
                            )}
                        />
                    </Box>
                   
                    <IconButton size="large" aria-label="search" color="inherit">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </AppBar>
            <Box component="div" p={1} sx={{backgroundColor:"white",color:"#777"}}> Category: cat</Box>


        </div>
    )
}

export default SearchPage
