import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    backgroundColor: '#504AAB',
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    backgroundColor: '#373A77',
    padding: theme.spacing(1),
  },
}));

const Text = styled(Typography)(() => ({
  color: '#fff',
  fontSize: '1.1rem',
  textAlign: 'left',
  textTransform: 'none',
}));

function BootstrapDialogTitle({ children, onClose, ...other }) {
  return (
    <DialogTitle
      sx={ { m: 0,
        p: 2,
        backgroundColor: '#504AAB',
        fontWeight: 'bold',
        textTransform: 'uppercase' } }
      { ...other }
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={ onClose }
          sx={ {
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          } }
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Rules({ open, handleClose }) {
  return (
    <BootstrapDialog
      onClose={ handleClose }
      aria-labelledby="customized-dialog-title"
      open={ open }
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={ handleClose }>
        Regras
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Text gutterBottom>
          1️⃣ Nesse modo de jogo, você deve pintar o quadro de acordo
          com o desafio do momento.
        </Text>
        <Text gutterBottom>
          2️⃣ Você pode usar as cores da paleta, desde que correspondam
          às cores do desafio.
        </Text>
        <Text gutterBottom>
          3️⃣ O objetivo é pintar o quadro no menor tempo possível para
          obter mais pontos.
        </Text>
        <Text gutterBottom>
          4️⃣ A cor preta já vem selecionada por padrão, não é preciso
          selecioná-la novamente.
        </Text>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={ handleClose }>
          <strong>
            Entendido 😁
          </strong>
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

Rules.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
