import React, { Component } from 'react';
import proptypes from 'prop-types';
import Pixel from './Pixel';
import './Line.css';

class Line extends Component {
  render() {
    const { boardSize, brushColor } = this.props;

    return (
      <div className="line">
        {
          boardSize.map((color, index) => (
            <Pixel
              key={ index }
              color={ color }
              brushColor={ brushColor }
              type="pixelBoard"
            />
          ))
        }
      </div>
    );
  }
}

Line.propTypes = {
  boardSize: proptypes.arrayOf(proptypes.string).isRequired,
  brushColor: proptypes.string.isRequired,
};

export default Line;
