import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Home from './pages/Home';
import ChallengerGame from './pages/ChallengerGame';

function App() {
  return (
    <div className="app-container">
      <h1>PIXEL ART + REACT 🎨</h1>

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/challenger" component={ ChallengerGame } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}

export default App;
