import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';

function HeaderSearch() {
  const { setSearchHeaderRadioValue,
    searchHeaderRadioValue, setSearchHeaderInputValue,
    searchHeaderInputValue } = useContext(MyContext);

  async function fetchRecipe() {
    const urlParams = {
      Ingredient: 'filter.php?i',
      Name: 'search.php?s',
      'First Letter': 'search.php?f',
    };

    const url = `https://www.themealdb.com/api/json/v1/1/${urlParams[searchHeaderRadioValue]}=${searchHeaderInputValue.replace(/ /g, '_').toLowerCase()}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

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
        onClick={ () => fetchRecipe() }
      >
        Search
      </Button>
    </Form>);
}

export default HeaderSearch;
