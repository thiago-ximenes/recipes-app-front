import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
import fetchApi from '../../services/fetchApi';
import MyContent from '../../Context/MyHeaderSearchContext/MyContent';

export default function Nationality() {
  const history = useHistory();
  const domainName = history.location.pathname.includes('foods')
    ? 'themealdb' : 'thecocktaildb';
  const type = domainName === 'themealdb' ? 'meals' : 'drinks';

  const [countries, setCountrie] = useState();
  const [search, setSearch] = useState('All');

  const { data, setData } = useContext(MyContent);

  const doze = 12;

  const fecthCountryName = () => {
    const url = `https://www.${domainName}.com/api/json/v1/1/list.php?a=list`;
    fetchApi(url).then((response) => setCountrie(response));
  };

  const fecthAll = () => {
    const url = `https://www.${domainName}.com/api/json/v1/1/search.php?s=`;
    fetchApi(url).then((response) => setData(response));
  };

  const fetchForCountry = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`;
    fetchApi(url).then((response) => setData(response));
    console.log(data);
  };

  const onChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  useEffect(() => {
    if (search === 'All' || search === undefined) {
      fecthAll();
    } else {
      fetchForCountry();
    }
    fecthCountryName();
  }, [search]);

  return (
    <div>
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ onChange }
      >
        <option data-testid="All-option">All</option>
        {
          countries !== undefined
          && countries[type]
          && countries[type]
            .map((country) => (
              <option
                key={ country.strArea }
                data-testid={ `${country.strArea}-option` }
              >
                { country.strArea }
              </option>
            ))
        }
      </select>

      <div>
        {
          data !== undefined
          && data[type]
          && data[type]
            .filter((item, index) => index < doze)
            .map((meal, index) => (
              <button
                type="button"
                key={ meal.idMeal }
                data-testid={ `${index}-recipe-card` }
                onClick={ () => history.push(`/foods/${meal.idMeal}`) }
              >
                <p data-testid={ `${index}-card-name` }>
                  { meal.strMeal }
                </p>
                <img
                  data-testid={ `${index}-card-img` }
                  alt={ meal.strMeal }
                  src={ meal.strMealThumb }
                  width="200px"
                />
              </button>
            ))
        }
      </div>
    </div>
  );
}
