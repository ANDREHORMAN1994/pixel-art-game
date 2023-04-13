import React, { Component } from 'react'
import Pixel from './Pixel';
import './PixelLine.css';

class PixelLine extends Component {
  render() {
    const { boardSize, brushColor } = this.props;
    return (
      <div className='line'>
        {
          boardSize.map((color, index) => (
            <Pixel
              key={index}
              type="board"
              color={color}
              brushColor={brushColor}
            />
          ))
        }
      </div>
    )
  }
}

export default PixelLine;
