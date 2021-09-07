import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Space } from 'antd'
export default class Category extends Component {
    render() {
        return (
            <Link to={'category?cat='+this.props.name} >
            <Card hoverable bodyStyle={{ padding: 0, }} style={{marginBottom:this.props.spacing}}>
                <Space  direction='horizontal' style={{ maxHeight: '48px', overflow: 'hidden' }}>
                    <div flex="48px" style={{ padding: '8px',backgroundColor: this.props.color}}>
                        <img src={this.props.icon} alt="" width="32px"/>
                    </div>
                    <div flex="auto" style={{padding:'2px',maxHeight:'48px',lineHeight: '100%'}}>
                        <strong style={{fontSize:'9px',margin:0}}>{this.props.name}</strong>
                        <p style={{fontSize:'8px',margin:0,lineHeight: '100%'}}>{this.props.description} </p>
                    </div>
                </Space>
            </Card>
            </Link>
        )
    }
}
