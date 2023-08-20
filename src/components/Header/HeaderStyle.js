import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 700px) {
    flex-flow: column nowrap;
    justify-content: center;
    width: 80%;
    gap: 1rem;
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

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
      font-size: 1rem;
    }
  }
`;
