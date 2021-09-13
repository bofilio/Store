import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Space } from 'antd'


const Category = (props) => {
    return (
        <Link to={'category/'+props.name+'/'} >
        <Card hoverable bodyStyle={{ padding: 0, }} style={{borderRadius:'4px',marginBottom:props.spacing}}>
            <Space  direction='horizontal' style={{ maxHeight: '48px', overflow: 'hidden' }}>
                <div flex="48px" style={{ padding: '8px',backgroundColor: props.color,borderRadius:'4px 0px 0px 4px'}}>
                    <img src={props.icon} alt="cat_imege" width="32px"/>
                </div>
                <div flex="auto" style={{padding:'2px',maxHeight:'48px',lineHeight: '100%'}}>
                    <strong style={{fontSize:'9px',margin:0}}>{props.name}</strong>
                    <p style={{fontSize:'8px',margin:0,lineHeight: '100%'}}>{props.description} </p>
                </div>
            </Space>
        </Card>
        </Link>
    )
}

export default Category;
