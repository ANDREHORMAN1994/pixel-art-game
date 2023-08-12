import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { incrementPixelColor } from '../../redux/slices/game';
import './Pixel.css';

function Pixel({
  idPixel = 0,
  color = 'white',
  brushColor = 'black',
  updateBrushColor = () => {},
  type }) {
  const dispatch = useDispatch();
  const [pixelColor, setPixelColor] = useState(color);

  useEffect(() => {
    if (type === 'pixelBoard' && idPixel) {
      dispatch(incrementPixelColor({
        id: idPixel,
        color: pixelColor,
      }));
    }
  }, [dispatch, idPixel, pixelColor, type]);

  return (
    <div
      className="pixel"
      style={ { backgroundColor: pixelColor } }
      onClick={ () => (type === 'pixelBoard'
        ? setPixelColor(brushColor)
        : updateBrushColor(pixelColor)) }
    />
  );
}

Pixel.propTypes = {
  idPixel: propTypes.string,
  color: propTypes.string.isRequired,
  brushColor: propTypes.string,
  updateBrushColor: propTypes.func,
  type: propTypes.string.isRequired,
};

export default Pixel;
