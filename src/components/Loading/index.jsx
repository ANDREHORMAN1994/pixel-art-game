import React from 'react';
import { LinearProgress, Stack } from '@mui/material';
import './LoadingStyle.css';

function Loading() {
  return (
    <div className="loading-container">
      <Stack sx={ { width: '100%', color: 'grey.500' } } spacing={ 2 }>
        <LinearProgress color="success" />
      </Stack>
      <div className="cube-container">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1" />
          <div className="sk-cube sk-cube2" />
          <div className="sk-cube sk-cube3" />
          <div className="sk-cube sk-cube4" />
          <div className="sk-cube sk-cube5" />
          <div className="sk-cube sk-cube6" />
          <div className="sk-cube sk-cube7" />
          <div className="sk-cube sk-cube8" />
          <div className="sk-cube sk-cube9" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
