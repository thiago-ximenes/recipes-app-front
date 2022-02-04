import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';

function ButtonCategory() {
  const history = useHistory();
  const { domainNameUrl, data, setData } = useContext(GlobalContext);
  const [categoryType, setCategoryType] = useState('meals');

  useEffect(() => {
    let domainName = history.location.pathname.split('/')[1];
    domainName = domainNameUrl === domainName ? domainNameUrl : domainName;
    const domainUrl = domainName === 'foods' ? 'themealdb' : 'thecocktaildb';

    const url = `https://www.${domainUrl}.com/api/json/v1/1/list.php?c=list`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));

    const routName = domainName === 'foods' ? 'meals' : 'drinks';
    setCategoryType(routName);
  }, [domainNameUrl]);

  const FOUR = 4;
  function renderButtons() {
    const result = data[categoryType].map((category, index) => {
      if (index <= FOUR) {
        return (
          <Button
            key={ index }
            variant="secondary"
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {category.strCategory}
          </Button>
        );
      }
      return null;
    });
    return result;
  }
  return (
    <div>
      {data && data[categoryType] && renderButtons()}
    </div>
  );
}

export default ButtonCategory;
