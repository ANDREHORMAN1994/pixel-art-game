import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Line from '../../components/Line';
import PaletteColor from '../../components/PaletteColor';
import { BoardContainer, GameContainer } from './GameStyle';
import SelectBoard from '../../components/SelectBoard';
import ButtonMui from '../../components/ButtonMui';

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
    <GameContainer className="container">
      <section>
        <div data-aos="fade-up">
          <PaletteColor
            updateBrushColor={ updateBrushColor }
            valueSize={ valueSize }
            screen="game"
          />
        </div>
        <BoardContainer data-aos="fade-up">
          <SelectBoard valueSize={ valueSize } setValueSize={ setValueSize } />
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
    </GameContainer>
  );
}

export default Game;
