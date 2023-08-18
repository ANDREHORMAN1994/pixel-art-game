import { Button } from '@mui/material';
import propTypes from 'prop-types';

export default function ButtonMui({ children, ...props }) {
  return (
    <Button
      sx={ {
        display: 'flex',
        alignItems: 'baseline',
        gap: '1rem',
        fontSize: '1.2rem',
        fontFamily: 'PixelFont, sans-serif',
        padding: '1rem 1.5rem',
        maxWidth: 'fit-content',
        margin: '0 auto',

        '> span': {
          fontSize: '2rem',
        },
      } }
      { ...props }
    >
      {children}
    </Button>
  );
}

ButtonMui.propTypes = {
  children: propTypes.node.isRequired,
};
