import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        onClick={ () => history.push('/game') }
      >
        Desenho Livre 🎨
      </button>
      <button
        type="button"
        onClick={ () => history.push('/challenger') }
      >
        Desafios ⚡️
      </button>
    </div>
  );
}

export default Home;
