import React, { Component } from 'react';
import proptypes from 'prop-types';
import Pixel from './Pixel';

class PaletteColor extends Component {
  state = {
    palleteSize: ['black', 'red', 'green', 'blue'],
  };

  render() {
    const { palleteSize } = this.state;
    const { updateBrushColor } = this.props;
    return (
      <div className="line">
        {
          palleteSize.map((color, index) => (
            <Pixel
              key={ index }
              color={ color }
              brushColor={ color }
              updateBrushColor={ updateBrushColor }
              type="pixelPallete"
            />
          ))
        }
      </div>
    );
  }
}

PaletteColor.propTypes = {
  updateBrushColor: proptypes.func.isRequired,
};

export default PaletteColor;
