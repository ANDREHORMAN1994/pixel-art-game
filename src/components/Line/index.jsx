import React from 'react';
import proptypes from 'prop-types';
import Pixel from '../Pixel';
import './Line.css';

function Line({ idLine, boardSize, brushColor }) {
  return (
    <div className="line">
      {
        boardSize.map((color, index) => (
          <Pixel
            key={ `${idLine}${index}` }
            idPixel={ `${idLine}${index}` }
            color={ color }
            brushColor={ brushColor }
            type="pixelBoard"
          />
        ))
      }
    </div>
  );
}

Line.propTypes = {
  idLine: proptypes.string.isRequired,
  boardSize: proptypes.arrayOf(proptypes.string).isRequired,
  brushColor: proptypes.string.isRequired,
};

export default Line;
