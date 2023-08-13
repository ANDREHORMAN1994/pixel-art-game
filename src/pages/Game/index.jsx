import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { setScore, setAssertions } from '../../redux/slices/user';
import Line from '../../components/Line';
import PaletteColor from '../../components/PaletteColor';
import Header from '../../components/Header';
import Challenger from '../../components/Challenger';
import draws from '../../utils/draws';
import Timer from '../../components/Timer';

const POINT_DEFAULT = 10;

function Game() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pixelColors, currentTimer } = useSelector(({ game }) => game);
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [indexDraw, setIndexDraw] = useState(0);
  const [valueSize, setValueSize] = useState(0);
  const [challenge, setChallenge] = useState({});
  const [stopTimer, setStopTimer] = useState(false);
  const [state, setState] = useState({
    boardSize: new Array(valueSize).fill('white'),
    brushColor: 'black',
  });

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
      setIndexDraw(indexDraw + 1);
      setIsLoading(true);
      setStopTimer(false);
      setShowButton(false);
    }
  }, [history, indexDraw]);

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
    <div>
      <Header />
      <PaletteColor updateBrushColor={ updateBrushColor } />
      <div>
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

      {showButton && (
        <button type="button" onClick={ nextDraw }>Próximo Desafio</button>
      )}

      {isLoading ? <h1>Loading...</h1> : (
        <div>
          <Timer
            setShowButton={ setShowButton }
            stopTimer={ stopTimer }
            setStopTimer={ setStopTimer }
          />
          <Challenger key={ challenge.drawId } challenge={ challenge } />
        </div>
      )}
    </div>
  );
}

export default Game;
