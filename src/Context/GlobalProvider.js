import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
    favoriteRecipes: [{
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
    }],
  });

  const [domainNameUrl, setDomainName] = useState('');

  const [categoryType, setCategoryType] = useState('meals');

  const [categories, setCategories] = useState('');

  const [categoryToggle, setCategoryToggle] = useState(false);

  const contextValues = {
    login,
    setLogin,
    localStorageToken,
    setLocalStorageToken,
    domainNameUrl,
    setDomainName,
    categoryType,
    setCategoryType,
    categories,
    setCategories,
    categoryToggle,
    setCategoryToggle,
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
