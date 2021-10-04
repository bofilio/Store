import React from 'react'
import WishListItem from '../wishlist/WishListItem'
import Stack from '@mui/material/Stack';
const Wishlist = () => {
    //const { data: itmes, isPending, error } = useFetchDocument("cart", "DQlTBiYrVWd9kUYi8Iz2", 500)
   
    const item = { image: "/static/imgs/jean.jpg", name: "Test Item", price: '34500 $' }
    return (
        <Stack sx={{ display: "flex", flexDirection: 'column',p:0.5}}  spacing={0.5}>
            <WishListItem item={item} />
            <WishListItem item={item} />
            <WishListItem item={item} />
        </Stack>
    )
}

export default Wishlist