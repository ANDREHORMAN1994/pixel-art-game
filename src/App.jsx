import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>PIXEL ART + REACT 🎨</h1>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
