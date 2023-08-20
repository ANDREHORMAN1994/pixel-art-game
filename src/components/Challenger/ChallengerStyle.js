import styled from 'styled-components';

export const ChallengerStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 700px) {
    margin: 0;
  }

  > div.infos-challenger {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 0.8rem;

    @media (max-width: 700px) {
      gap: 0.5rem;
    }
    
    > p {
      font-size: 1rem;
      font-weight: 400;

      @media (max-width: 700px) {
        font-size: 0.8rem;
      }

      > strong {
        font-weight: 700;
        color: ${(props) => props.theme.textPure};
        /* text-shadow: 0 0 1px #FFF; */
      }
    }
  }
`;
