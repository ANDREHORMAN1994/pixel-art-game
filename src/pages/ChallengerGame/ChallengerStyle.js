import styled from 'styled-components';

export const GameContainer = styled.div`
    > section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
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
  }
`;
