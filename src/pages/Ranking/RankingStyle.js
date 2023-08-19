import styled from 'styled-components';

export const RankingContainer = styled.form`

  > h1 {
    font-size: 2rem;
    font-weight: lighter;
    font-family: PixelFont, sans-serif;
  }

  > section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.8rem;
    background-color: ${({ theme }) => `${theme.inputBackground}80`};
    border-radius: 1rem;
    box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
    padding: 2rem 5rem;
    height: 450px;
    width: 80%;
    overflow-y: auto;
  }
`;

export const RankingUser = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  > div.perfil {
    width: 20rem;
  }

  > div.points {
    width: 30rem;
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: white;
    font-weight: lighter;
    font-family: PixelText, sans-serif;
    text-align: center;
  }
`;
