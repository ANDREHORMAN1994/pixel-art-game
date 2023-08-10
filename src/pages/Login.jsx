import React, { Component } from 'react';
import propTypes from 'prop-types';

class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <label htmlFor="name">
          Escreva seu Nome
          <input type="text" name="" id="name" />
        </label>

        <label htmlFor="email">
          Escreva seu Email
          <input type="email" name="" id="email" />
        </label>

        <button
          type="button"
          onClick={ () => history.push('/game') }
        >
          Login
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
