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
    doneRecipes: [{
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
      doneDate: '',
      tags: '',
    }],
  });

  const contextValues = {
    login,
    setLogin,
    localStorageToken,
    setLocalStorageToken,
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
