import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../MyHeaderSearchContext/MyContent';

function HeaderSearch() {
  const [input, setInput] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const { setSearchHeaderRadioValue, setSearchHeaderInputValue } = useContext(MyContext);

  return (
    <Form>
      <Form.Control
        data-testid="search-input"
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
      />
      <Form.Check
        checked={ radioValue === 'Ingredient' }
        value="Ingredient"
        name="search"
        label="Ingredient"
        type="radio"
        onChange={ (e) => {
          console.log(e.target.value);
          setRadioValue(e.target.value);
        } }
        data-testid="ingredient-search-radio"
      />
      <Form.Check
        checked={ radioValue === 'Name' }
        value="Name"
        name="search"
        label="Name"
        type="radio"
        onChange={ (e) => setRadioValue(e.target.value) }
        data-testid="name-search-radio"
      />
      <Form.Check
        checked={ radioValue === 'First Letter' }
        value="First Letter"
        name="search"
        label="First Letter"
        type="radio"
        onChange={ (e) => setRadioValue(e.target.value) }
        data-testid="first-letter-search-radio"
      />
      <Button
        data-testid="exec-search-btn"
        onClick={ () => {
          setSearchHeaderInputValue(input);
          setSearchHeaderRadioValue(radioValue);
        } }
      >
        Search
      </Button>
    </Form>);
}

export default HeaderSearch;
