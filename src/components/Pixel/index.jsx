import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { incrementPixelColor } from '../../redux/slices/game';
import { PixelContainer } from './PixelStyle';

function Pixel({
  idPixel,
  type,
  updateBrushColor = () => {},
  brushColor = 'black',
  color = 'white',
  stopTimer = false,
  size = '40px',
  border = 'none',
  margin = '1px',
}) {
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
    <PixelContainer
      size={ size }
      border={ border }
      margin={ margin }
      type={ type }
      style={ { backgroundColor: pixelColor } }
      onClick={ () => (type === 'pixelBoard'
        ? changePixelColor()
        : updateBrushColor(pixelColor)) }
    />
  );
}

Pixel.propTypes = {
  idPixel: propTypes.string.isRequired,
  updateBrushColor: propTypes.func,
  brushColor: propTypes.string,
  stopTimer: propTypes.bool,
  color: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  size: propTypes.string,
  border: propTypes.string,
  margin: propTypes.string,
};

export default Pixel;
