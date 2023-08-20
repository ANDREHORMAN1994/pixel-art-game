import { styled } from '@mui/system';
import { Select } from '@mui/material';
import Button from '@mui/material/Button';

export const ButtonSelect = styled(Button)`
  font-family: PixelText, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }

  @media (max-width: 700px) {
    letter-spacing: 0rem;
    font-weight: bold;
  }
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
