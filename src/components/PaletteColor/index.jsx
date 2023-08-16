import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import Pixel from '../Pixel';

const INITIAL_COLORS = ['white', 'black', 'red', 'green', 'blue', 'yellow'];
const HEX_LENGTH = 6;
const HEX_BASE = 16;

function PaletteColor({ updateBrushColor }) {
  const [palleteSize, setPalleteSize] = useState(INITIAL_COLORS);
  const [idPallete, setIdPallete] = useState(0);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < HEX_LENGTH; i += 1) {
      color += letters[Math.floor(Math.random() * HEX_BASE)];
    }

    return color;
  };

  const generateListColors = () => {
    const newArrayColors = palleteSize.slice(2).map(generateRandomColor);
    console.log(newArrayColors);
    setPalleteSize(['white', 'black', ...newArrayColors]);
  };

  useEffect(() => {
    setIdPallete((prevState) => prevState + 1);
  }, [palleteSize]);

  return (
    <>
      <div key={ idPallete } className="line">
        {
          palleteSize.map((color, index) => (
            <Pixel
              key={ index }
              idPixel={ `${index}` }
              color={ color }
              brushColor={ color }
              updateBrushColor={ updateBrushColor }
              type="pixelPallete"
            />
          ))
        }
      </div>
      <button type="button" onClick={ generateListColors }>Gerar novas cores</button>
    </>
  );
}

PaletteColor.propTypes = {
  updateBrushColor: proptypes.func.isRequired,
};

export default PaletteColor;
