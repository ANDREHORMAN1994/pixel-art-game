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

    @media (max-width: 1000px) {
      padding: 5rem 4rem;
      gap: 3rem;
    }

    @media (max-width: 700px) {
      flex-flow: column nowrap;
      gap: 1.5rem;
      padding: 2rem;
    }

    > img {
      width: 20rem;

      @media (max-width: 1000px) {
        width: 15rem;
      }
    }

    > div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      @media (max-width: 700px) {
        gap: 1rem;
      }
    }
  }
`;
