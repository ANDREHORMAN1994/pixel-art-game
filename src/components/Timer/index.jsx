import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateTimer } from '../../redux/slices/game';

const INITIAL_TIMER = 5;
const INTERVAL_SEC = 1000;

let interval;

function Timer({ setShowButton, stopTimer }) {
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
    }
  }, [dispatch, setShowButton, stopTimer, timer]);

  return (
    <h3>{timer}</h3>
  );
}

Timer.propTypes = {
  setShowButton: propTypes.func.isRequired,
  stopTimer: propTypes.bool.isRequired,
};

export default Timer;
