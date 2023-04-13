import React, { Component } from 'react'
import Pixel from './Pixel';

class PaletteColor extends Component {
  state = {
    palleteSize: [ 'black', 'red', 'green', 'blue' ],
  }

  render() {
    const { palleteSize } = this.state;
    const { updateBrushColor } = this.props;
    return (
      <div className='line' >
        {
          palleteSize.map((color, index) => (
            <Pixel
              key={index}
              color={color}
              brushColor={color}
              updateBrushColor={ updateBrushColor }
              type="pixelPallete"
            />
          ))
        }
      </div>
    )
  }
}

export default PaletteColor