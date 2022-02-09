import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';
import fetchApi from '../../services/fetchApi';

function HeaderSearch() {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const { setSearchHeaderRadioValue,
    searchHeaderRadioValue, setSearchHeaderInputValue,
    searchHeaderInputValue, domainName, setDomainName,
    setLoading, data, setData } = useContext(MyContext);

  useEffect(() => {
    const domain = history.location.pathname.split('/');
    setDomainName(domain[1].toLowerCase());
  }, []);

  useEffect(() => {
    console.log('chamou no HeaderSearch', data);
  });

  function fetchRecipe(e) {
    e.preventDefault();
    const firstLetter = 'First Letter';
    const routeName = domainName === 'foods' ? 'themealdb' : 'thecocktaildb';
    if (searchHeaderRadioValue === firstLetter && searchHeaderInputValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const urlParams = {
      Ingredient: 'filter.php?i',
      Name: 'search.php?s',
      [firstLetter]: 'search.php?f',
    };
    // https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript
    const url = `https://www.${routeName}.com/api/json/v1/1/${urlParams[searchHeaderRadioValue]}=${searchHeaderInputValue}`;
    setLoading(true);
    fetchApi(url).then((result) => {
      setData(result);
    });
    setLoading(false);
  }
  useEffect(() => {
    if (data) {
      if (data.meals) {
        if (data.meals.length === 1) {
          setRedirect(true);
          setRedirectUrl(`/foods/${data.meals[0].idMeal}`);
        }
      } else if (data.drinks && data.drinks.length === 1) {
        setRedirect(true);
        setRedirectUrl(`/drinks/${data.drinks[0].idDrink}`);
      }
    }
  }, [data]);

  return (
    <Form>
      <Form.Control
        data-testid="search-input"
        value={ searchHeaderInputValue }
        onChange={ (e) => setSearchHeaderInputValue(e.target.value) }
      />
      <Form.Check
        checked={ searchHeaderRadioValue === 'Ingredient' }
        value="Ingredient"
        name="search"
        label="Ingredient"
        type="radio"
        onChange={ (e) => setSearchHeaderRadioValue(e.target.value) }
        data-testid="ingredient-search-radio"
      />
      <Form.Check
        checked={ searchHeaderRadioValue === 'Name' }
        value="Name"
        name="search"
        label="Name"
        type="radio"
        onChange={ (e) => setSearchHeaderRadioValue(e.target.value) }
        data-testid="name-search-radio"
      />
      <Form.Check
        checked={ searchHeaderRadioValue === 'First Letter' }
        value="First Letter"
        name="search"
        label="First Letter"
        type="radio"
        onChange={ (e) => setSearchHeaderRadioValue(e.target.value) }
        data-testid="first-letter-search-radio"
      />
      <Button
        data-testid="exec-search-btn"
        onClick={ (e) => fetchRecipe(e) }
      >
        Search
      </Button>
      { redirect && history.push(redirectUrl) }
    </Form>);
}

export default HeaderSearch;
