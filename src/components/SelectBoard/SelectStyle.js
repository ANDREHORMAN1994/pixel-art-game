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

  & fieldset {
    border: 2px solid #0D86DD;

    &:hover {
      border: 2px solid #fff;
    }
  }

  & svg {
    fill: #0D86DD;
  }

  
  > div {
    cursor: url('https://fav.farm/👆') 15 0 , auto;
  }
`;
