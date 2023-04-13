import React, { Component } from 'react'
import Pixel from './Pixel'
import './Line.css';

class Line extends Component {
  render() {
    const { boardSize, brushColor } = this.props;

    return (
      <div className='line' >
        {
          boardSize.map((color, index) => (
            <Pixel
              key={index}
              color={color}
              brushColor={brushColor}
              type="pixelBoard"
            />
          ))
        }
      </div>
    )
  }
}

export default Line