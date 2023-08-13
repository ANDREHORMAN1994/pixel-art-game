import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/slices/user';
import { readLocalStorage } from '../../utils/localStorage';

function Ranking() {
  const history = useHistory();
  const dispatch = useDispatch();
  const localUser = readLocalStorage('pixelRanking') || [];

  const playAgain = () => {
    history.push('/');
    dispatch(reset());
  };

  return (
    <div>
      <h1>Ranking</h1>
      <div>
        {localUser.map(({ name, imgGravatar, assertions, score }, index) => (
          <div key={ index }>
            <p>{name}</p>
            <p>{`Artes pintadas: ${assertions}`}</p>
            <p>{`Pontuação alcançada: ${score}`}</p>
            <img src={ imgGravatar } alt="Imagem do usuário" />
          </div>
        ))}
      </div>
      <button type="button" onClick={ playAgain }>Jogue Novamente 😎</button>
    </div>
  );
}

export default Ranking;
