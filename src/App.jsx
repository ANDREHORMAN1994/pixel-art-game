import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setScore } from './redux/slices/user';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import { readLocalStorage } from './utils/localStorage';

const LAST_INDEX = -1;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localRanking = readLocalStorage('pixelRanking') || [];
    const userInfos = localRanking.at(LAST_INDEX);
    if (userInfos) {
      const { name, email, imgGravatar, score } = userInfos;
      dispatch(setUser({ name, email, imgGravatar }));
      dispatch(setScore(score));
    }
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>PIXEL ART + REACT 🎨</h1>

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ Game } />
      </Switch>
    </div>
  );
}

export default App;
