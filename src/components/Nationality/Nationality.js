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

  const { data, setData } = useContext(MyContent);

  const fecthCountryName = () => {
    const url = `https://www.${domainName}.com/api/json/v1/1/list.php?a=list`;
    fetchApi(url).then((response) => setCountrie(response));
  };

  const fecthAll = () => {
    const url = `https://www.${domainName}.com/api/json/v1/1/search.php?s=`;
    fetchApi(url).then((response) => setData(response));
  };

  useEffect(() => {
    fecthCountryName();
    fecthAll();
  }, []);

  return (
    <div>
      <select
        // id="dropdown-basic-button" title="Country">
        data-testid="explore-by-nationality-dropdown"
      >
        {
          countries !== undefined
          && countries[type]
          && countries[type]
            .map((country) => (
              <option
                href="#/action-1"
                key={ country.strArea }
                data-testid={ `${country.strArea}-option` }
              >
                { country.strArea }
              </option>
            ))
        }
      </select>
      {
        console.log(data)
      }
      <div>
        {
          data !== undefined
          && data[type]
          && data[type]
            .map((meal) => (
              <div key={ meal.idMeal }>
                <p>
                  { meal.strMeal }
                </p>
                <img
                  alt={ meal.strMeal }
                  src={ meal.strMealThumb }
                  width="200px"
                />
              </div>
            ))
        }
      </div>
    </div>
  );
}
