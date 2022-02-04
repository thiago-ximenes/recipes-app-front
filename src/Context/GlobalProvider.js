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

  const [domainNameUrl, setDomainName] = useState('');

  const [categoryType, setCategoryType] = useState('meals');

  const [data, setData] = useState([]);

  const contextValues = {
    login,
    setLogin,
    localStorageToken,
    setLocalStorageToken,
    domainNameUrl,
    setDomainName,
    categoryType,
    setCategoryType,
    data,
    setData,
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
