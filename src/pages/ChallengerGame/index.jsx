import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { Box, ButtonGroup } from '@mui/material';
import { setScore, setAssertions } from '../../redux/slices/user';
import Line from '../../components/Line';
import PaletteColor from '../../components/PaletteColor';
import draws from '../../utils/draws';
import Header from '../../components/Header';
import { BoardContainer, GameContainer } from './ChallengerStyle';
import ButtonMui from '../../components/ButtonMui';

const POINT_DEFAULT = 10;
const MOBILE_SIZE = 1000;

function ChallengerGame() {
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
    const result = POINT_DEFAULT + (
      currentTimer * difficultyValues[challenge.difficulty]
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
    }
  }, [history, indexDraw, isDesktop]);

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
          'Você acertou!!',
          'success',
        );
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
  }, [calculateScore, indexDraw, pixelColors]);

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
    <GameContainer className="container">
      <Header isDesktop={ isDesktop } />
      {isLoading ? <h1>Loading...</h1> : (
        <section>
          <div>
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
          <BoardContainer>
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
  );
}

export default ChallengerGame;
