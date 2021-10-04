import React from 'react'
import {useFetchDocument } from '../../../hooks/useFetch'
import CartItem from './CartItem';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
const CartList = () => {
    const { data: itmes, isPending, error } = useFetchDocument("cart", "DQlTBiYrVWd9kUYi8Iz2", 500)
    console.log(itmes);
    const item = { image: "/static/imgs/jean.jpg", name: "Test Item", price: '34500 $' }
    return (
        <Stack sx={{ display: "flex", flexDirection: 'column',p:0.5}}  spacing={0.5}>
            <CartItem item={item} />
            <CartItem item={item} />
            <CartItem item={item} />
        </Stack>
    )
}

export default CartList

