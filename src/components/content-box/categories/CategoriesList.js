import React, { useState, useEffect } from 'react'
import Category from './Category'
import Box from '@mui/system/Box'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchCategoriesList } from '../../../firebase/apis/category';
import { useFetchCollection } from '../../../hooks/useFetch';

const CategoriesList = () => {
    const { data: categories, isPending, error } = useFetchCollection('category')
    return (
        isPending ?
            <Box sx={{minHeight:"200px" ,display: 'flex',alignItems:'center',justifyContent:'center'}}>
                <CircularProgress />
            </Box>
            :
            <Box p={1} ml={1} mr={1}>
                <Stack sx={{ width: '100%' }} spacing={1}>
                    {
                        categories && categories.map(cat => (
                            <Category category={cat} key={cat.name} />
                        ))
                    }
                </Stack>
            </Box>
    )
}

export default CategoriesList
