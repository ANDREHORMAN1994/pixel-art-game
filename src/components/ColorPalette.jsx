import React, { Component } from 'react'
import Pixel from './Pixel';

class ColorPalette extends Component {
  state = {
    paletteList: ['black', 'red', 'green', 'blue'],
  }

  render() {
    const { paletteList } = this.state;
    const { changeBrushColor } = this.props;
    return (
      <div className='line'>
        {
          paletteList.map((color) => (
            <Pixel
              key={color}
              type="palette"
              color={color}
              changeBrushColor={changeBrushColor}
            />
          ))
        }
      </div>
    )
  }
}

export default ColorPalette;
