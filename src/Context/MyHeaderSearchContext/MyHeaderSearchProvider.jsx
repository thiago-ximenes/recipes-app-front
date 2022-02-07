import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from './MyContent';
import fetchApi from '../../services/fetchApi';

function MyHeaderSearchProvider({ children }) {
  const [searchHeaderInputValue, setSearchHeaderInputValue] = useState('');
  const [searchHeaderRadioValue, setSearchHeaderRadioValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [domainName, setDomainName] = useState('');
  const [data, setData] = useState([]);
  const [result, setResult] = useState();
  const [categoriesData, setCategoriesData] = useState([]);
  const history = useHistory();

  function onClickCard(recipe) {
    const domain = history.location.pathname.split('/');
    const path = domain[1].toLowerCase();
    const api = path === 'foods' ? 'themealdb' : 'thecocktaildb';
    const id = path === 'foods' ? recipe.idMeal : recipe.idDrink;

    fetchApi(`https://www.${api}.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setResult(path === 'foods' ? response?.meals[0] : response?.drinks[0]);
      });

    history.push(`/${path}/${id}`);
  }

  return (
    <MyContext.Provider
      value={ {
        searchHeaderInputValue,
        setSearchHeaderInputValue,
        searchHeaderRadioValue,
        setSearchHeaderRadioValue,
        domainName,
        setDomainName,
        loading,
        setLoading,
        data,
        setData,
        categoriesData,
        setCategoriesData,
        onClickCard,
        result,
      } }
    >
      { children }
    </MyContext.Provider>

  );
}

MyHeaderSearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyHeaderSearchProvider;
