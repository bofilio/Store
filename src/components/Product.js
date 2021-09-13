import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;


const Product = (props) => {
    return (
        <div style={{width:'150px', margin:'4px'}}>
            <Card hoverable style={{ width: '100%' }} cover={<img alt="dress" src={props.image} />}>
                <Meta title={props.price} description={props.title} />
            </Card>
        </div>
    )
}

export default Product
