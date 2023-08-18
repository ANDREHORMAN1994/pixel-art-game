import { styled } from '@mui/system';
import { Select } from '@mui/material';
import Button from '@mui/material/Button';

export const ButtonSelect = styled(Button)`
  font-family: PixelText, sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff;
  width: 100%;
`;

export const SelectContainer = styled(Select)`
  width: 100%;
  color: #fff;
 
  > div {
    cursor: url('https://fav.farm/👆') 15 0 , auto;
  }
`;
