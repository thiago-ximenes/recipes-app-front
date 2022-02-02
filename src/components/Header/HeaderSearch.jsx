import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';

function HeaderSearch() {
  const { setSearchHeaderRadioValue,
    searchHeaderRadioValue, setSearchHeaderInputValue,
    searchHeaderInputValue, domainName } = useContext(MyContext);

  async function fetchRecipe() {
    console.log(domainName);
    let domain = domainName;
    if (domainName === 'foods') {
      domain = 'themealdb';
    } else if (domainName === 'drinks') {
      domain = 'thecocktaildb';
    }
    if (searchHeaderRadioValue === 'First Letter' && searchHeaderInputValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const urlParams = {
      Ingredient: 'filter.php?i',
      Name: 'search.php?s',
      'First Letter': 'search.php?f',
    };
    // https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript
    const url = `https://www.${domain}.com/api/json/v1/1/${urlParams[searchHeaderRadioValue]}=${searchHeaderInputValue.replace(/ /g, '_').toLowerCase()}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
