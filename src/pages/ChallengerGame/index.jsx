import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import proptypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Box, ButtonGroup } from '@mui/material';
import { setScore, setAssertions } from '../../redux/slices/user';
import Line from '../../components/Line';
import PaletteColor from '../../components/PaletteColor';
import draws from '../../utils/draws';
import Header from '../../components/Header';
import { BoardContainer, GameContainer } from './ChallengerStyle';
import ButtonMui from '../../components/ButtonMui';
import Loading from '../../components/Loading';

const MOBILE_SIZE = 1000;

function ChallengerGame({ setShowConfetti }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pixelColors, currentTimer } = useSelector(({ game }) => game);
  const [isLoading, setIsLoading] = useState(true);
  const [idBoard, setIdBoard] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [indexDraw, setIndexDraw] = useState(0);
  const [valueSize, setValueSize] = useState(0);
  const [challenge, setChallenge] = useState({});
  const [stopTimer, setStopTimer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [state, setState] = useState({
    boardSize: new Array(valueSize).fill('white'),
    brushColor: 'black',
  });

  const isMobile = () => window.innerWidth <= MOBILE_SIZE;

  const handleResize = () => {
    if (isMobile() && isDesktop) {
      setIsDesktop(false);
    }
    if (!isMobile() && !isDesktop) {
      setIsDesktop(true);
    }
  };

  window.addEventListener('resize', handleResize);
  useEffect(handleResize, [isDesktop]);

  const updateBrushColor = (newColor) => {
    setState({
      ...state,
      brushColor: newColor,
    });
  };

  const calculateScore = useCallback(() => {
    const difficultyValues = {
      easy: 1,
      medium: 2,
      hard: 3,
    };
    const baseScore = 100 * difficultyValues[challenge.difficulty];
    const scorePerSecond = 1;
    const minScore = 50;

    const result = Math.max(
      minScore,
      baseScore - scorePerSecond * currentTimer,
    );
    dispatch(setScore(result));
    dispatch(setAssertions());
  }, [challenge.difficulty, currentTimer, dispatch]);

  const nextDraw = useCallback(() => {
    if (indexDraw + 1 === draws.length) {
      history.push('/ranking');
    } else {
      if (!isDesktop && draws[indexDraw + 1].screen === 'desktop') {
        history.push('/ranking');
      }
      setIndexDraw(indexDraw + 1);
      setIsLoading(true);
      setStopTimer(false);
      setShowButton(false);
      setState((prev) => ({
        ...prev,
        brushColor: 'black',
      }));
      setShowConfetti(false);
    }
  }, [history, indexDraw, isDesktop, setShowConfetti]);

  const clearBoard = useCallback(() => {
    setIdBoard((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const showAlert = (result) => {
      if (result) {
        calculateScore();
        setStopTimer(true);
        setShowButton(true);
        Swal.fire(
          'Parabéns!',
          `Tempo: ${currentTimer} segundos`,
          'success',
        );
        setShowConfetti(true);
      }
    };
    const verifyResult = () => {
      if (pixelColors.length > 0) {
        const { draw } = draws[indexDraw];
        const result = draw.every((p, index) => {
          const pixel = pixelColors[index];
          if (!pixel) return false;
          if (!p) return false;
          return (p.id === pixel.id && p.color === pixel.color);
        });
        showAlert(result);
      }
    };
    verifyResult();
  }, [calculateScore, currentTimer, indexDraw, pixelColors, setShowConfetti]);

  useEffect(() => {
    const formatDraw = () => {
      const currentDraw = draws[indexDraw];
      const { draw, pixelSize } = currentDraw;
      setValueSize(pixelSize);

      const newDraw = state.boardSize.map((_, index) => {
        const line = [];
        draw.forEach((d) => {
          const lineId = d.id.length > 2 ? d.id.substring(0, 2) : d.id[0];
          const verifyLineId = +lineId > index ? +lineId[0] === index : +lineId === index;
          if (verifyLineId && line.length < pixelSize) line.push(d);
        });
        return line;
      });

      setChallenge({ ...currentDraw, draw: newDraw });
      setIsLoading(false);
    };
    formatDraw();
  }, [indexDraw, state.boardSize]);

  useEffect(() => {
    const updateBoardSize = () => {
      if (valueSize) {
        setState((prevState) => ({
          ...prevState,
          boardSize: new Array(valueSize).fill('white'),
        }));
      }
    };
    updateBoardSize();
  }, [valueSize]);

  const { boardSize, brushColor } = state;

  return (
    <>
      <Header isDesktop={ isDesktop } />
      <GameContainer className="container">
        {isLoading ? <Loading /> : (
          <section>
            <div data-aos="fade-up">
              <PaletteColor
                updateBrushColor={ updateBrushColor }
                valueSize={ valueSize }
                screen="challenger"
                showButton={ showButton }
                nextDraw={ nextDraw }
                setShowButton={ setShowButton }
                stopTimer={ stopTimer }
                setStopTimer={ setStopTimer }
                challenge={ challenge }
              />
            </div>
            <BoardContainer data-aos="fade-up">
              <p>Tente replicar o desenho aqui 👇</p>
              <div key={ idBoard }>
                {boardSize.map((_, index) => (
                  <Line
                    key={ `${index}` }
                    idLine={ `${index}` }
                    boardSize={ boardSize }
                    brushColor={ brushColor }
                    stopTimer={ stopTimer }
                  />
                ))}
              </div>
              <Box
                sx={ {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '& > *': {
                    m: 1,
                  },
                } }
              >
                <ButtonGroup
                  variant="contained"
                  aria-label="large button group"
                >
                  <ButtonMui type="button" onClick={ clearBoard }>
                    Limpar quadro
                    <span>🖼️</span>
                  </ButtonMui>
                  <ButtonMui type="button" onClick={ () => history.push('/home') }>
                    <span>🏠</span>
                  </ButtonMui>
                </ButtonGroup>
              </Box>
            </BoardContainer>
          </section>
        )}
      </GameContainer>
    </>
  );
}

ChallengerGame.propTypes = {
  setShowConfetti: proptypes.func.isRequired,
};

export default ChallengerGame;
