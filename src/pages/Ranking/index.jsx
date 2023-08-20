import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/slices/user';
import { readLocalStorage } from '../../utils/localStorage';
import { AvatarRanking, RankingContainer, RankingUser } from './RankingStyle';
import ButtonMui from '../../components/ButtonMui';

function Ranking() {
  const history = useHistory();
  const dispatch = useDispatch();
  const localUser = readLocalStorage('pixelRanking') || [];

  const playAgain = () => {
    history.push('/');
    dispatch(reset());
  };

  return (
    <RankingContainer className="container">
      <h1>Ranking</h1>
      <section>
        {localUser.map(({ name, imgGravatar, assertions, score }, index) => (
          <RankingUser key={ index }>
            <div className="perfil">
              <p>
                {`${index + 1}º`}
              </p>
              <AvatarRanking
                src={ imgGravatar }
                alt="Imagem de perfil do usuário"
              />
              <p>{name}</p>
            </div>
            <div className="points">
              <p>{`Artes pintadas: ${assertions}`}</p>
              <p>{`Pontuação alcançada: ${score}`}</p>
            </div>
          </RankingUser>
        ))}
      </section>
      <ButtonMui
        type="button"
        variant="contained"
        onClick={ playAgain }
      >
        Jogue Novamente
        <span>😎</span>
      </ButtonMui>
    </RankingContainer>
  );
}

export default Ranking;
