import React from 'react'
import { useFetchCollection } from '../../../hooks/useFetch'
import NewsCarosel from './NewsCarosel'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'
const News = () => {
    const filter = []
    const { data: news, isPending, error } = useFetchCollection('news',filter,500)
    return (
        isPending ?
        <Box sx={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
        :
        <NewsCarosel news={news}/>
    )
}

export default News
