import styled from 'styled-components';

export const ChallengerStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  > div.infos-challenger {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 0.8rem;
    
    > p {
      font-size: 1rem;
      font-weight: 400;

      > strong {
        font-weight: 700;
        color: ${(props) => props.theme.textPure};
        /* text-shadow: 0 0 1px #FFF; */
      }
    }
  }
`;
