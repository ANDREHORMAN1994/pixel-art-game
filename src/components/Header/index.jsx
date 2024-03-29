import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MD5 } from 'crypto-js';
import { setUser } from '../../redux/slices/user';
import { writeLocalStorage } from '../../utils/localStorage';
import { HeaderContainer } from './HeaderStyle';

const GRAVATAR_URL = 'https://www.gravatar.com/avatar/';
const imgStyleDesktop = { width: 70, height: 70, border: '3px solid white' };
const imgStyleMobile = { width: 56, height: 56, border: '2px solid white' };

function Header({ isDesktop }) {
  const [gravatarImg, setGravatarImg] = React.useState(GRAVATAR_URL);

  const { name, email, score, assertions } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email) {
      const hash = MD5(email).toString();
      const imgGravatar = `${GRAVATAR_URL}${hash}`;
      setGravatarImg(imgGravatar);
      const userInfos = { name, email, imgGravatar, score, assertions };
      dispatch(setUser({ imgGravatar }));
      writeLocalStorage(
        'pixelRanking',
        userInfos,
      );
    }
  }, [assertions, dispatch, email, name, score]);

  return (
    <HeaderContainer data-aos="fade-down">
      <div>
        <Avatar
          sx={ isDesktop ? imgStyleDesktop : imgStyleMobile }
          src={ gravatarImg }
          alt="Imagem de perfil do usuário"
        />
        <p>{name}</p>
      </div>
      <p>{`Pontuação: ${score}`}</p>
    </HeaderContainer>
  );
}

Header.propTypes = {
  isDesktop: proptypes.bool.isRequired,
};

export default Header;
