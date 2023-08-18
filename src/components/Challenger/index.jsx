import React from 'react';
import propTypes from 'prop-types';
import Pixel from '../Pixel';
import Timer from '../Timer';
import { ChallengerStyle } from './ChallengerStyle';

function Challenger({ challenge: { name, draw },
  setShowButton, stopTimer, setStopTimer }) {
  return (
    <ChallengerStyle>
      <div className="infos-challenger">
        <p>
          {'Challenger '}
          <strong>{name}</strong>
        </p>
        <Timer
          setShowButton={ setShowButton }
          stopTimer={ stopTimer }
          setStopTimer={ setStopTimer }
        />
      </div>
      <div>
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
    </ChallengerStyle>
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
  setShowButton: propTypes.func.isRequired,
  setStopTimer: propTypes.func.isRequired,
  stopTimer: propTypes.bool.isRequired,
};

export default Challenger;
