import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import Pixel from '../Pixel';
import { PaletteContainer } from './PaletteStyle';
import ButtonMui from '../ButtonMui';

const INITIAL_COLORS = ['white', 'black', 'red', 'green', 'blue', 'yellow'];
const HEX_LENGTH = 6;
const HEX_BASE = 16;

function PaletteColor({ updateBrushColor, screen, valueSize }) {
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
    <PaletteContainer>
      <section>
        <div className="overlay" />
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
                size="70px"
                border="50%"
                margin="10px"
              />
            ))
          }
        </div>
        {
          screen === 'game' && (
            <div className="btn-pallete">
              <ButtonMui
                type="button"
                variant="contained"
                onClick={ generateListColors }
              >
                <span>🌈</span>
                Gerar novas cores
              </ButtonMui>
              <p>
                <strong>
                  {`Tamanho atual do quadro: ${valueSize * valueSize} pixels`}
                </strong>
              </p>
            </div>
          )
        }
      </section>
    </PaletteContainer>
  );
}

PaletteColor.propTypes = {
  updateBrushColor: proptypes.func.isRequired,
  screen: proptypes.string.isRequired,
  valueSize: proptypes.number.isRequired,
};

export default PaletteColor;
