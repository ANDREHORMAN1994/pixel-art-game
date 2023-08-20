import React from 'react';
import proptypes from 'prop-types';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function ConfettiEffect({ adjustHeight = 0 }) {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={ width }
      height={ height + Number(adjustHeight) }
    />
  );
}

ConfettiEffect.propTypes = {
  adjustHeight: proptypes.number,
}.isRequired;
