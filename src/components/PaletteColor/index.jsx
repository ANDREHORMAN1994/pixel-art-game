import React, { useState } from 'react';
import proptypes from 'prop-types';
import Pixel from '../Pixel';

const INITIAL_COLORS = ['black', 'red', 'green', 'blue'];

function PaletteColor({ updateBrushColor }) {
  const [palleteSize, setPalleteSize] = useState(INITIAL_COLORS);

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

PaletteColor.propTypes = {
  updateBrushColor: proptypes.func.isRequired,
};

export default PaletteColor;
