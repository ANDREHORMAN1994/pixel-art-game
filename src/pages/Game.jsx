import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Line from '../components/Line';
import PaletteColor from '../components/PaletteColor';
import Header from '../components/Header';
import Challenger from '../components/Challenger';
import draws from '../utils/draws';

function Game() {
  const { pixelColors } = useSelector(({ game }) => game);
  const [isLoading, setIsLoading] = useState(true);
  const [indexDraw, setIndexDraw] = useState(0);
  const [valueSize, setValueSize] = useState(0);
  const [challenge, setChallenge] = useState({});
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

  const nextDraw = useCallback(() => {
    setIndexDraw(indexDraw + 1);
    setIsLoading(true);
  }, [indexDraw]);

  useEffect(() => {
    const showAlert = (result) => {
      if (result) {
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
  }, [indexDraw, pixelColors]);

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
          />
        ))}
      </div>

      <button type="button" onClick={ nextDraw }>Próximo Desafio</button>

      {isLoading ? <h1>Loading...</h1> : (
        <Challenger key={ challenge.drawId } challenge={ challenge } />
      )}
    </div>
  );
}

export default Game;
