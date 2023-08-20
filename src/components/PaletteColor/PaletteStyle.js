import styled from 'styled-components';

export const PaletteContainer = styled.div`
  > section {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    min-height: 35vh;
    padding: 2rem;

    @media (max-width: 700px) {
      padding: 1rem 2rem;
    }

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradientLinear};
      border-radius: 1rem;
      box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
      opacity: 0.4;
      z-index: -1;
    }

    > div.line {
      display: grid;
      grid-template-columns: ${({ screen }) => (
    screen === 'game' ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)')};

      @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    > div.btn-pallete {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 100%;
      margin-top: 1rem;

      @media (max-width: 1000px) {
        gap: 1rem;
      }

      > p {
        width: 20rem;
        text-align: center;
        display: flex;
        justify-content: center;
        line-height: 1.8rem;

        @media (max-width: 1000px) {
          width: 15rem;
          font-size: 0.8rem;
          line-height: 1.2rem;
        }

        @media (max-width: 700px) {
          width: 10rem;
          font-size: 0.6rem;
          line-height: 1rem;
        }
      }
    }
  }
`;
