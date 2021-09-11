import React, { useState } from 'react'
import Category from './Category'
const CategoryList = () => {
    const [categories, SetCategories] = useState([
        {
            id:1,
            name:'Fashion',
            icon:'shirt.png',
            description:"The numbers in the table specify the first browser version that fully",
            color:"#e28743",
            spacing:'2px'
        },
        {
            id:2,
            name:'Phones',
            icon:'phone.png',
            description:"The numbers in the table specify the first browser version that fully",
            color:"#fc43d5",
            spacing:'2px'

        },
        {
            id:3,
            name:'Fashion',
            icon:'shirt.png',
            description:"The numbers in the table specify the first browser version that fully",
            color:"#e28743",
            spacing:'2px',
        }
    ])
    return (
        <div>
            {
                categories.map(cat=>(
                    <Category key={cat.id} name={cat.name} icon={cat.icon} description={cat.description} color={cat.color} spacing={cat.spacing}/>
            ))
            }

        </div>
    )
}

export default CategoryList
