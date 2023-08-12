import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Line from '../components/Line';
import PaletteColor from '../components/PaletteColor';
import Header from '../components/Header';
import Challenger from '../components/Challenger';
import draws from '../utils/draws';

const INITIAL_SIZE_BOARD = 10;

function Game() {
  const { pixelColors } = useSelector(({ game }) => game);
  const [valueSize, setValueSize] = useState(INITIAL_SIZE_BOARD);
  const [indexDraw, setIndexDraw] = useState(0);
  const [state, setState] = useState({
    boardSize: new Array(valueSize).fill('white'),
    brushColor: 'black',
  });

  const formatDraw = () => {
    const newDraw = state.boardSize.map((_, index) => {
      const line = [];
      draws[indexDraw].draw.forEach((draw) => {
        if (draw.id.startsWith(index)) {
          line.push(draw);
        }
      });
      return line;
    });
    return newDraw;
  };

  const updateBrushColor = (newColor) => {
    setState({
      ...state,
      brushColor: newColor,
    });
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      boardSize: new Array(valueSize).fill('white'),
    }));
  }, [valueSize]);

  useEffect(() => {
    if (pixelColors.length > 0 && draws) {
      const drawChallenge = draws[indexDraw].draw;
      const result = drawChallenge.every((p, index) => {
        const pixel = pixelColors[index];
        return (p.id === pixel.id && p.color === pixel.color);
      });
      if (result) {
        setTimeout(() => alert('Parabéns, você acertou!'), 100);
      }
    }
  }, [pixelColors]);

  const { boardSize, brushColor } = state;

  return (
    <div>
      <Header />
      <PaletteColor updateBrushColor={ updateBrushColor } />
      <div>
        {
          boardSize.map((_, index) => (
            <Line
              key={ index }
              idLine={ `${index}` }
              boardSize={ boardSize }
              brushColor={ brushColor }
            />
          ))
        }
      </div>
      <Challenger formatDraw={ formatDraw } />
    </div>
  );
}

export default Game;
