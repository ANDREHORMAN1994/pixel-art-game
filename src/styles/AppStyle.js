import styled from 'styled-components';
import { TextField } from '@mui/material';
import { darken } from 'polished';

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  gap: 2rem;
  margin-top: 5rem;

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
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: none;

  > span {
    font-size: 2rem;
    margin-left: 1rem;
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
