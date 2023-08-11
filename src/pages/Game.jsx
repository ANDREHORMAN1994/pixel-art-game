import React, { useEffect, useState } from 'react';
import Line from '../components/Line';
import PaletteColor from '../components/PaletteColor';
import Header from '../components/Header';

const INITIAL_SIZE_BOARD = 3;

function Game() {
  const [valueSize, setValueSize] = useState(INITIAL_SIZE_BOARD);
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

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      boardSize: new Array(valueSize).fill('white'),
    }));
  }, [valueSize]);

  const { boardSize, brushColor } = state;

  return (
    <div>
      <Header />
      <PaletteColor updateBrushColor={ updateBrushColor } />

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
  );
}

export default Game;
