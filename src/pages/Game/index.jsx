import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Line from '../../components/Line';
import PaletteColor from '../../components/PaletteColor';

const INITIAL_SIZE = 10;

function Game() {
  const history = useHistory();
  const [valueSize, setValueSize] = useState(INITIAL_SIZE);
  const [idBoard, setIdBoard] = useState(0);
  const [state, setState] = useState({
    boardSize: new Array(valueSize).fill('white'),
    brushColor: 'black',
  });

  const updateBrushColor = (newColor) => {
    setState({
      ...state,
      brushColor: newColor,
    });
    console.log(newColor);
  };

  const clearBoard = useCallback(() => {
    setIdBoard((prev) => prev + 1);
  }, []);

  const updateBoardSize = useCallback(() => {
    if (valueSize) {
      setState((prevState) => ({
        ...prevState,
        boardSize: new Array(valueSize).fill('white'),
      }));
      clearBoard();
    }
  }, [clearBoard, valueSize]);

  useEffect(() => {
    updateBoardSize();
  }, [updateBoardSize, valueSize]);

  const { boardSize, brushColor } = state;

  return (
    <div>
      <PaletteColor updateBrushColor={ updateBrushColor } />
      <p>{`Tamanho atual do quadro: ${valueSize * valueSize} pixels`}</p>
      <input
        type="number"
        placeholder="Digite um número inteiro 🖌️"
        onChange={ ({ target: { value } }) => setValueSize(Number(value)) }
      />
      <div key={ idBoard }>
        {boardSize.map((_, index) => (
          <Line
            key={ `${index}` }
            idLine={ `${index}` }
            boardSize={ boardSize }
            brushColor={ brushColor }
          />
        ))}
      </div>

      <button type="button" onClick={ clearBoard }>Limpar quadro 🖼️</button>
      <button type="button" onClick={ () => history.push('/home') }>Home 🏠</button>
    </div>
  );
}

export default Game;
