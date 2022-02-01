import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';

function Login() {
  const history = useHistory();
  const { login, setLogin,
    localStorageToken, setLocalStorageToken } = useContext(GlobalContext);

  const validateInput = () => {
    // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const validateEmail = String(login.email).toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordLength = 6;
    return (!validateEmail || login.password.length < passwordLength);
  };

  const handleInputLogin = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value,
      isDisabled: validateInput(),
    });
  };

  const onClick = (event) => {
    event.preventDefault();
    const mealToken = localStorage.setItem('mealsToken', JSON.stringify(1));
    const cocktailsToken = localStorage.setItem('cocktailsToken', JSON.stringify(1));
    const user = localStorage.setItem('user',
      JSON.stringify({ email: login.email }));
    setLocalStorageToken({
      ...localStorageToken,
      mealToken,
      cocktailsToken,
      user,
    });
    history.push('/foods');
  };

  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        placeholder="Email"
        value={ login.email }
        name="email"
        onChange={ handleInputLogin }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        value={ login.password }
        name="password"
        onChange={ handleInputLogin }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ login.isDisabled }
        onClick={ onClick }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
