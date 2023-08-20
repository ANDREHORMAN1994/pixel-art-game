import styled from 'styled-components';

const DEFAULT_FONT = 16;
const MOBILE_FONT_PALETTE = 15;
const MOBILE_MARGIN_PALETTE = 5;
const MOBILE_FONT_PIXEL = 5;
const MOBILE_MARGIN_PIXEL = 2;

const formatValuePixel = (value, media = 0) => {
  const valueSplit = value.split('px');
  const valueNumber = Number(valueSplit[0]);
  const valuePixel = (valueNumber - media) / DEFAULT_FONT;
  return `${valuePixel}rem`;
};

export const PixelContainer = styled.div`
  height: ${({ size }) => formatValuePixel(size)};
  width: ${({ size }) => formatValuePixel(size)};
  margin: ${({ margin }) => formatValuePixel(margin)};
  border: 2px solid ${({ theme }) => theme.inputBackground};
  border-radius: ${({ border }) => border};

  @media (max-width: 1000px) {
    margin: ${({ margin, type }) => (type === 'pixelBoard'
    ? formatValuePixel(margin, MOBILE_MARGIN_PIXEL)
    : formatValuePixel(margin, MOBILE_MARGIN_PALETTE))};
  }

  @media (max-width: 700px) {
    height: ${({ size, type }) => (type === 'pixelBoard'
    ? formatValuePixel(size, MOBILE_FONT_PIXEL)
    : formatValuePixel(size, MOBILE_FONT_PALETTE))};
    width: ${({ size, type }) => (type === 'pixelBoard'
    ? formatValuePixel(size, MOBILE_FONT_PIXEL)
    : formatValuePixel(size, MOBILE_FONT_PALETTE))};
  }
`;
