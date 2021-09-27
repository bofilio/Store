import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CurrencyAutoCompleet = () => {
    const currencies = [
        { label: 'USD', default: true },
        { label: 'EUR',default:false },
        { label: 'DA',default:false  },
        { label: 'DTN',default:false },
    ]
    return (
        <Autocomplete
            disablePortal
           
            id="combo-box-demo"
            options={currencies}
            defaultValue={currencies[0]}
            sx={{ width: 200,p:0,m:0 }}
            renderInput={(params) => <TextField {...params} label="Currency"  variant="standard"/>}
        />
    )
}

export default CurrencyAutoCompleet
