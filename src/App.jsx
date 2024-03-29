import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import useSound from 'use-sound';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { setLoading } from './redux/slices/game';
import Login from './pages/Login';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Home from './pages/Home';
import ChallengerGame from './pages/ChallengerGame';
import { IconFab, TitleContainer } from './styles/AppStyle';
import Loading from './components/Loading';
import 'aos/dist/aos.css';
import ConfettiEffect from './components/Confetti';

const TIMEOUT_LOADING = 1000;

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.game);
  const { pathname } = useLocation();

  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playBoop, { pause }] = useSound('/sounds/theme.mp3', {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      playBoop();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, TIMEOUT_LOADING);
  }, [dispatch, pathname]);

  return (
    <main className="app-container">
      {pathname === '/ranking' && <ConfettiEffect />}
      {pathname === '/challenger' && showConfetti && <ConfettiEffect />}

      <IconFab color="primary" aria-label="add" onClick={ togglePlay }>
        <LibraryMusicIcon />
      </IconFab>

      <section className="container">
        {pathname !== '/challenger' && (
          <TitleContainer>
            <h1>PIXEL</h1>
            <h1>ART</h1>
            <h1>
              GAME
              <span>🎨</span>
            </h1>
          </TitleContainer>
        )}

        {loading ? (<Loading />)
          : (
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route exact path="/home" component={ Home } />
              <Route exact path="/game" component={ Game } />
              <Route
                exact
                path="/challenger"
                render={ (props) => (<ChallengerGame
                  { ...props }
                  setShowConfetti={ setShowConfetti }
                />) }
              />
              <Route exact path="/ranking" component={ Ranking } />
            </Switch>
          )}
      </section>
    </main>
  );
}

export default App;
