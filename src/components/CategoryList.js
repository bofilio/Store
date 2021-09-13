import React, { useState } from 'react'
import Category from './Category'
import FakeDatabase from '../data/data'

const CategoryList = () => {
    const categories = FakeDatabase.categories;
    return (
        <div>
            {
                categories.map(cat => (
                    <Category key={cat.id} name={cat.name} icon={cat.icon} description={cat.description} color={cat.color} spacing={cat.spacing} />
                ))
            }

        </div>
    )
}

export default CategoryList
