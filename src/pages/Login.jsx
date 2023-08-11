import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { setUser } from '../redux/slices/user';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleValidation = () => {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const valEmail = emailRegex.test(email);
      const valName = name.length > 0 && name.trim();
      setIsDisabled(!(valEmail && valName));
    };
    handleValidation();
  }, [name, email]);

  const handleClick = () => {
    dispatch(setUser({ name, email }));
    history.push('/game');
  };

  return (
    <div>
      <label htmlFor="name">
        Escreva seu Nome
        <input
          type="text"
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </label>

      <label htmlFor="email">
        Escreva seu Email
        <input
          type="email"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </label>

      <button
        type="button"
        onClick={ handleClick }
        disabled={ isDisabled }
      >
        Login
      </button>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
