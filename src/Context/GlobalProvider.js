import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    isDisabled: true,
  });

  const [localStorageToken, setLocalStorageToken] = useState({
    mealsToken: '',
    cocktailsToken: '',
  });

  const [domainNameUrl, setDomainName] = useState('foods');

  const contextValues = {
    login,
    setLogin,
    localStorageToken,
    setLocalStorageToken,
    domainNameUrl,
    setDomainName,
  };

  return (
    <GlobalContext.Provider value={ contextValues }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
