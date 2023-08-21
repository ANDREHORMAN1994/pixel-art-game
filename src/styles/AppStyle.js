import styled from 'styled-components';
import { styled as styledMui } from '@mui/system';
import { Fab, TextField } from '@mui/material';
import { darken } from 'polished';

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 700px) {
    gap: 0.5rem;
  }

  > h1 {
    font-size: 3rem;

    &:nth-child(1) {
      color: ${({ theme }) => theme.primary};
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.secondary};
    }
    &:nth-child(3) {
      color: ${({ theme }) => theme.third};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 1000px) {
      font-size: 2.5rem;
    }

    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

const DARKEN_VALUE = 0.1;
export const Button = styled.button`
  font-family: PixelFont , sans-serif;
  font-weight: lighter;
  background-color: ${({ theme, color }) => color || theme.primary};
  color: ${({ theme }) => theme.textPure};
  font-weight: bold;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: none;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    font-size: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
    font-weight: lighter;
    text-align: center;
    padding: 1.2rem;
  }

  > span {
    font-size: 2rem;
    margin-left: 1rem;

    @media (max-width: 700px) {
      font-size: 1.5rem;
      margin-left: 0.3rem;
    }
  }
  
  &:hover {
    background-color: ${({ theme, color }) => darken(
    DARKEN_VALUE,
    color || theme.primary,
  )};
    color: ${({ theme }) => darken(DARKEN_VALUE, theme.textPure)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.textLight};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Input = styled(TextField)`
  input {
    color: ${({ theme }) => theme.textPure};
    caret-color: ${({ theme }) => theme.textPure};
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    padding: 1.2rem 2rem;
    min-width: 20rem;

    @media (max-width: 1000px) {
      min-width: 15rem;
    }

    @media (max-width: 700px) {
      min-width: 10rem;
      font-size: 1rem;
    }
  
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
      -webkit-transition-delay: 0.1s;
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.inputAutoComplete}
        inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.textPure} !important;
      animation: none !important;
    }
  }
`;

export const IconFab = styledMui(Fab)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: url('https://fav.farm/👆') 15 0 , auto;
`;
