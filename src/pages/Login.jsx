import React, { Component } from 'react'

class Login extends Component {
  state = {
    isDisable: true,
    name: '',
    email: '',
  }

  validation = () => {
    const { name, email } = this.state;
    const valName = name !== '';
    const valEmail = email !== '' && email.includes('@');

    this.setState({
      isDisable: !(valName && valEmail),
    })
  }

  handleChange = ({ target }) => {
    const { value, id } = target;
    this.setState({
      [id]: value,
    }, this.validation)
  }

  render() {
    const { isDisable } = this.state;
    const { history } = this.props;
    return (
      <div>
        <label htmlFor="name">
          Escreva seu nome
          <input type="text" id="name" onChange={this.handleChange} />
        </label>

        <label htmlFor="email">
          Escreva seu email
          <input type="text" id="email" onChange={this.handleChange} />
        </label>

        <button disabled={isDisable} onClick={() => history.push('/game')} >Login</button>
      </div>
    )
  }
}

export default Login;
