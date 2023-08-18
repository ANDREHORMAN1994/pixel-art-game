import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: white;
    font-weight: lighter;
    font-family: PixelFont, sans-serif;
  }
`;
