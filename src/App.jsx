import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Home from './pages/Home';
import ChallengerGame from './pages/ChallengerGame';
import { TitleContainer } from './styles/AppStyle';

function App() {
  return (
    <main className="app-container">
      <section className="container">
        <TitleContainer>
          <h1>PIXEL</h1>
          <h1>ART</h1>
          <h1>GAME 🎨</h1>
        </TitleContainer>

        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/game" component={ Game } />
          <Route exact path="/challenger" component={ ChallengerGame } />
          <Route exact path="/ranking" component={ Ranking } />
        </Switch>
      </section>
    </main>
  );
}

export default App;
