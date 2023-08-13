import React from 'react';
import propTypes from 'prop-types';
import Pixel from '../Pixel';

function Challenger({ challenge: { name, draw } }) {
  return (
    <div>
      <h1>{`Challenger ${name}`}</h1>
      {
        draw.map((line, index) => (
          <div className="line" key={ index }>
            {line.map((pixel) => (
              <Pixel
                key={ pixel.id }
                idPixel={ `${index}` }
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
  challenge: propTypes.shape({
    draw: propTypes.arrayOf(propTypes.arrayOf(propTypes.shape({
      id: propTypes.string,
      color: propTypes.string,
    }))),
    name: propTypes.string,
  }).isRequired,
};

export default Challenger;
