import React from 'react'
import NotificationItem from './NotificationItem'
import Stack from '@mui/material/Stack';
const NotificationsList = () => {
    const item = { image: "/static/imgs/jean.jpg", name: "Test Item", price: '34500 $' }
    return (
        <Stack sx={{ display: "flex", flexDirection: 'column',p:0.5}}  spacing={0.5}>
            <NotificationItem key={1} item={item} to=""/>
            <NotificationItem key={2} item={item} to=""/>
            <NotificationItem key={3} item={item} to=""/>
        </Stack>
    )
}
export default NotificationsList
