import React, { Component } from 'react'
import { Card,Row, Col } from 'antd'
import { ShoppingOutlined } from '@ant-design/icons';
export default class Category extends Component {
    render() {
        return (
            <Card bodyStyle={{padding:0,}}>
                <Row align="middle">
                    <Col flex="64px" style={{}}><ShoppingOutlined style={{ padding:'8px',fontSize: "32px", color: "white", backgroundColor: "#73AD21" }} /></Col>
                    <Col flex="auto">Fill Rest</Col>
                </Row>
            </Card>

        )
    }
}
