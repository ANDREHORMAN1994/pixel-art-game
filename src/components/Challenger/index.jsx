import React from 'react';
import propTypes from 'prop-types';
import Pixel from '../Pixel';

function Challenger({ formatDraw }) {
  return (
    <div>
      <h1>Challenger</h1>
      {
        formatDraw().map((line, index) => (
          <div className="line" key={ index }>
            {line.map((pixel) => (
              <Pixel
                key={ pixel.id }
                color={ pixel.color }
                type="draw"
              />
            ))}
          </div>
        ))
      }
    </div>
  );
}

Challenger.propTypes = {
  formatDraw: propTypes.func.isRequired,
};

export default Challenger;
