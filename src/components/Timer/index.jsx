import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateTimer } from '../../redux/slices/game';

const INITIAL_TIMER = 60;
const INTERVAL_SEC = 1000;

let interval;

function Timer({ setShowButton, stopTimer, setStopTimer }) {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(INITIAL_TIMER);

  useEffect(() => {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, INTERVAL_SEC);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(updateTimer(timer));
    if (stopTimer) clearInterval(interval);
    if (timer === 0) {
      clearInterval(interval);
      setShowButton(true);
      setStopTimer(true);
    }
  }, [dispatch, setShowButton, setStopTimer, stopTimer, timer]);

  return (
    <p>
      {'Tempo restante: '}
      <strong>{timer}</strong>
    </p>
  );
}

Timer.propTypes = {
  setShowButton: propTypes.func.isRequired,
  setStopTimer: propTypes.func.isRequired,
  stopTimer: propTypes.bool.isRequired,
};

export default Timer;
