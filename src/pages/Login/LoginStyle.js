import styled from 'styled-components';

export const LoginContainer = styled.form`
  > section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    background-color: ${({ theme }) => `${theme.inputBackground}80`};
    border-radius: 1rem;
    box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
    padding: 5rem;

    @media (max-width: 1000px) {
      padding: 4rem;
    }

    @media (max-width: 700px) {
      padding: 2rem;
    }

    > label {
      font-family: PixelFont , sans-serif;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.textPure};
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      margin-bottom: 2rem;

      @media (max-width: 1000px) {
        font-size: 1.2rem;
      }

      @media (max-width: 700px) {
        font-size: 1rem;
        gap: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
