import * as React from 'react';
import { useEffect, useState } from 'react';
import proptypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem } from '@mui/material';
import { ButtonSelect, SelectContainer } from './SelectStyle';

const MOBILE_SIZE = 1000;
const BOARD_LENGTH_DEFAULT = 3;
const BOARD_VALUES = ['5', '10', '16'];

function SelectBoard({ valueSize, setValueSize }) {
  const [open, setOpen] = useState(false);
  const [boardValues, setBoardValues] = useState(BOARD_VALUES);

  const isMobile = () => window.innerWidth <= MOBILE_SIZE;

  const handleResize = () => {
    if (isMobile() && boardValues.length > 2) {
      setBoardValues(['5', '10']);
    }
    if (!isMobile() && boardValues.length < BOARD_LENGTH_DEFAULT) {
      setBoardValues(BOARD_VALUES);
    }
  };

  window.addEventListener('resize', handleResize);

  const handleChange = ({ target: { value } }) => {
    setValueSize(Number(value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(handleResize, [boardValues.length]);

  return (
    <div>
      <ButtonSelect
        sx={ { display: 'block', mt: 2 } }
        variant="text"
        onClick={ handleOpen }
      >
        Altere o tamanho do Quadro 🖌️
      </ButtonSelect>
      <FormControl sx={ { m: 1, minWidth: 120, width: '100%', margin: 'auto' } }>
        <InputLabel sx={ { color: 'white' } } id="size-board">Tamanho</InputLabel>
        <SelectContainer
          labelId="size-board"
          id="size-board"
          open={ open }
          onClose={ handleClose }
          onOpen={ handleOpen }
          value={ valueSize }
          label="Tamanho"
          onChange={ handleChange }
          MenuProps={ {
            sx: {
              '&& .Mui-selected': {
                backgroundColor: '#848DA0',
              },
              '&& ul': {
                backgroundColor: '#4B4B4B',
              },
            },
          } }
        >
          {boardValues.map((value) => (
            <MenuItem key={ value } value={ value }>
              {`${value * value} Pixels`}
            </MenuItem>
          ))}
        </SelectContainer>
      </FormControl>
    </div>
  );
}

SelectBoard.propTypes = {
  valueSize: proptypes.number.isRequired,
  setValueSize: proptypes.func.isRequired,
};

export default SelectBoard;
