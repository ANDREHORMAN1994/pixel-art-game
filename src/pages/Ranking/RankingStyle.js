import { Avatar } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import styled from 'styled-components';

export const RankingContainer = styled.form`
  > h1 {
    font-size: 2rem;
    font-weight: lighter;
    font-family: PixelFont, sans-serif;

    @media (max-width: 1000px) {
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }

  > section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1.8rem;
    background-color: ${({ theme }) => `${theme.inputBackground}80`};
    border-radius: 1rem;
    box-shadow: 0 0 1rem ${({ theme }) => theme.inputBackground};
    padding: 2rem 5rem;
    height: 450px;
    overflow-y: auto;

    @media (max-width: 1000px) {
      width: 80%;
      padding: 2rem 3rem;
    }

    @media (max-width: 700px) {
      padding: 2rem 1rem;
      max-width: 80%;
      max-height: 330px;
    }
  }
`;

export const RankingUser = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 700px) {
    flex-flow: column nowrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  > div.perfil {
    width: 20rem;

    @media (max-width: 700px) {
      width: 80%;
    }
  }

  > div.points {
    width: 30rem;

    @media (max-width: 700px) {
      width: 100%;
    }
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

    @media (max-width: 1000px) {
      font-size: 1rem;
    }

    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
`;

export const AvatarRanking = styledMui(Avatar)`
  width: 70px;
  height: 70px;
  border: 3px solid white;

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
    border: 2px solid white;
  }
`;
