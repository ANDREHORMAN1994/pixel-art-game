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

    > label {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.textPure};
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;
    }
  }
`;
