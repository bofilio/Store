import React from 'react'
import { useParams } from 'react-router'

const CategoryPage = () => {
    let {cat}=useParams();
    return (
        <div>
            <h1> categort: {cat}</h1>
        </div>
    )
}

export default CategoryPage
