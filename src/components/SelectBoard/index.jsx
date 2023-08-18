import * as React from 'react';
import proptypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem } from '@mui/material';
import { ButtonSelect, SelectContainer } from './SelectStyle';

function SelectBoard({ valueSize, setValueSize }) {
  const [open, setOpen] = React.useState(false);

  const handleChange = ({ target: { value } }) => {
    setValueSize(Number(value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
        <InputLabel id="size-board">Tamanho</InputLabel>
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
          <MenuItem value={ 5 }>25 Pixels</MenuItem>
          <MenuItem value={ 10 }>100 Pixels</MenuItem>
          <MenuItem value={ 16 }>256 Pixels</MenuItem>
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
