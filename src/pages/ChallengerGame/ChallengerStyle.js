import styled from 'styled-components';

export const GameContainer = styled.div`
  margin-top: 10rem;
  width: 100%;
  height: 100%;

  @media (max-width: 700px) {
    margin-top: 6.5rem;
  }

  > section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }

    @media (max-width: 700px) {
      flex-flow: column nowrap;
      gap: 1rem;
    }
  }
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > p {
    font-size: 1rem;

    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
`;
