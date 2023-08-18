import styled from 'styled-components';

export const PixelContainer = styled.div`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  margin: ${({ margin }) => margin};
  border: 2px solid ${({ theme }) => theme.inputBackground};
  border-radius: ${({ border }) => border};
`;
