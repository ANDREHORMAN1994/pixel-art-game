import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.border};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
  width: 100vw !important;

  @media (max-width: 700px) {
    padding: 0.8rem 0;
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.5rem;

    > p {
      font-family: PixelText, sans-serif;
      font-size: 1.2rem;

      @media (max-width: 1000px) {
        font-size: 1rem;
      }

      @media (max-width: 700px) {
        font-size: 0.8rem;
      }
    }
  }

  p {
    font-size: 1.5rem;
    color: white;
    font-weight: lighter;
    font-family: PixelFont, sans-serif;

    @media (max-width: 1000px) {
      font-size: 1.2rem;
    }

    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }
`;
