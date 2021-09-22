import Category from './Category'
import React from 'react'
import Hspace from '../../toolsBox/Hspace'
import Box  from '@mui/system/Box'
const CategoriesList = () => {
    return (
        <Box p={1} ml={1} mr={1}>
            <Category key="1"/>
            <Hspace mt={1}/>
            <Category key="2"/>
            <Hspace mt={1}/>
            <Category key="3"/>
            <Hspace mt={1}/>
            <Category key="4"/>
            <Hspace mt={1}/>
            <Category key="5"/>
            <Hspace mt={1}/>
            <Category key="6"/>
            <Hspace mt={1}/>
            <Category key="7"/>
        </Box>
    )
}

export default CategoriesList
