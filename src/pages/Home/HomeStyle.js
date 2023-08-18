import styled from 'styled-components';

export const HomeContainer = styled.div`
    > section {
    display: flex;
    flex-flow: row nowrap;
    gap: 5rem;
    background-color: ${({ theme }) => `${theme.inputBackground}80`};
    border-radius: 1rem;
    box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
    padding: 5rem;

    > img {
      width: 20rem;
    }

    > div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`;
