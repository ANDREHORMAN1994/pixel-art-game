import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { incrementPixelColor } from '../../redux/slices/game';
import './Pixel.css';

function Pixel({
  idPixel,
  color = 'white',
  brushColor = 'black',
  updateBrushColor = () => {},
  stopTimer = false,
  type }) {
  const dispatch = useDispatch();
  const [pixelColor, setPixelColor] = useState(color);

  const changePixelColor = () => {
    if (!stopTimer) {
      setPixelColor(brushColor);
    }
  };

  useEffect(() => {
    const updatePixelColor = () => {
      if (type === 'pixelBoard' && idPixel && !stopTimer) {
        dispatch(incrementPixelColor({
          id: idPixel,
          color: pixelColor,
        }));
      }
    };
    updatePixelColor();
  }, [dispatch, idPixel, pixelColor, stopTimer, type]);

  return (
    <div
      className="pixel"
      style={ { backgroundColor: pixelColor } }
      onClick={ () => (type === 'pixelBoard'
        ? changePixelColor()
        : updateBrushColor(pixelColor)) }
    />
  );
}

Pixel.propTypes = {
  idPixel: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  brushColor: propTypes.string,
  updateBrushColor: propTypes.func,
  stopTimer: propTypes.bool,
  type: propTypes.string.isRequired,
};

export default Pixel;
