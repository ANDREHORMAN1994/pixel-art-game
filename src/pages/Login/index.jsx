import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reset, setUser } from '../../redux/slices/user';
import { LoginContainer } from './LoginStyle';
import { Button, Input } from '../../styles/AppStyle';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [colorInputName, setColorInputName] = useState('primary');
  const [colorInputEmail, setColorInputEmail] = useState('primary');
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    const handleValidation = () => {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const valEmail = emailRegex.test(email);
      const valName = name.length > 0 && name.trim();
      setIsDisabled(!(valEmail && valName));
    };
    handleValidation();
  }, [name, email]);

  const handleChange = ({ target: { value } }, setFunction, type) => {
    setFunction(value);
    if (type === 'name') setColorInputName('warning');
    else setColorInputEmail('warning');
  };

  const handleBlur = (type) => {
    if (type === 'name' && name.length > 0 && name.trim()) {
      return true;
    } if (type === 'email') {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const valEmail = emailRegex.test(email);
      return valEmail;
    }
    return false;
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setUser({ name, email }));
    setRedirect(true);
  };

  if (redirect) return (<Redirect to="/home" />);

  return (
    <LoginContainer onSubmit={ handleClick } className="container">
      <section>
        <label htmlFor="name">
          Escreva seu Nome
          <Input
            id="name"
            color={ colorInputName }
            variant="outlined"
            focused
            onChange={ (e) => handleChange(e, setName, 'name') }
            onBlur={ () => (handleBlur('name')
              ? setColorInputName('success') : setColorInputName('error')
            ) }
          />
        </label>

        <label htmlFor="email">
          Escreva seu Email
          <Input
            id="email"
            color={ colorInputEmail }
            variant="outlined"
            focused
            onChange={ (e) => handleChange(e, setEmail, 'email') }
            onBlur={ () => (handleBlur('email')
              ? setColorInputEmail('success') : setColorInputEmail('error')
            ) }
          />
        </label>

        <Button
          type="submit"
          variant="contained"
          disabled={ isDisabled }
        >
          Login
        </Button>
      </section>
    </LoginContainer>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
