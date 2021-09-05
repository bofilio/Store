import React, { Component } from 'react'
import { Carousel } from 'antd';
export default class MyCarousel extends Component {
    style = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3 style={this.style}>1</h3>
                </div>
                <div>
                    <h3 style={this.style}>2</h3>
                </div>
                <div>
                    <h3 style={this.style}>3</h3>
                </div>
                <div>
                    <h3 style={this.style}>4</h3>
                </div>
            </Carousel>
        )
    }
}
