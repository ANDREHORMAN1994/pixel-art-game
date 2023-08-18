import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../styles/AppStyle';
import { HomeContainer } from './HomeStyle';

function Home() {
  const history = useHistory();

  return (
    <HomeContainer className="container">
      <section>
        <img src="/images/pallete.png" alt="" />
        <div>
          <Button
            type="button"
            onClick={ () => history.push('/game') }
          >
            Desenho Livre
            <span>🖌️</span>
          </Button>
          <Button
            type="button"
            color="#63ba00"
            onClick={ () => history.push('/challenger') }
          >
            Desafios
            <span>⚡️</span>
          </Button>
        </div>
      </section>
    </HomeContainer>
  );
}

export default Home;
