import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MD5 } from 'crypto-js';
import { writeLocalStorage } from '../../utils/localStorage';

const GRAVATAR_URL = 'https://www.gravatar.com/avatar/';

function Header() {
  const [gravatarImg, setGravatarImg] = React.useState(GRAVATAR_URL);
  const { name, email, score } = useSelector((state) => state.user);

  useEffect(() => {
    if (email) {
      const hash = MD5(email).toString();
      const imgGravatar = `${GRAVATAR_URL}${hash}`;
      setGravatarImg(imgGravatar);
      writeLocalStorage(
        'pixelRanking',
        { name, email, imgGravatar, score },
      );
    }
  }, [email, name, score]);

  return (
    <div>
      <p>{name}</p>
      <img src={ gravatarImg } alt="Imagem de perfil do usuário" />
      <p>{score}</p>
    </div>
  );
}

export default Header;
