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

        '@media (max-width: 1000px)': {
          fontSize: '0.9rem',
          fontWeight: 0,
          padding: '0.5rem 1rem',
          gap: '0.5rem',
        },

        '@media (max-width: 700px)': {
          fontSize: '0.8rem',
          fontWeight: 0,
          padding: '0.5rem 1rem',
          gap: '0.2rem',
        },

        '> span': {
          fontSize: '2rem',

          '@media (max-width: 1000px)': {
            fontSize: '1.5rem',
          },
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
