import styled from 'styled-components';

export const GameContainer = styled.div`
    > section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;

    @media (max-width: 1000px) {
      gap: 3rem;
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
`;
