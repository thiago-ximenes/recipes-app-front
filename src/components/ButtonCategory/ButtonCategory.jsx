import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';
import fetchByCategory from '../../services/fetchByCategory';

function ButtonCategory() {
  const history = useHistory();
  const { domainNameUrl, categories, setCategories,
    setCategoryToggle } = useContext(GlobalContext);
  const { setCategoriesData, categoriesData,
    setLoading } = useContext(MyContext);
  const [categoryType, setCategoryType] = useState('meals');

  useEffect(() => {
    let domainName = history.location.pathname.split('/')[1];
    domainName = domainNameUrl === domainName ? domainNameUrl : domainName;
    const domainUrl = domainName === 'foods' ? 'themealdb' : 'thecocktaildb';

    const url = `https://www.${domainUrl}.com/api/json/v1/1/list.php?c=list`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setCategories(result));

    const routName = domainName === 'foods' ? 'meals' : 'drinks';
    setCategoryType(routName);
  }, [domainNameUrl]);

  function setToggleFunctionality(category) {
    // https://www.tutorialspoint.com/how-to-compare-two-objects-in-javascript
    if (JSON.stringify(category) === JSON.stringify(categoriesData)) {
      setCategoryToggle(false);
      setCategoriesData([]);
    } else {
      setCategoryToggle(true);
      setCategoriesData(category);
    }
  }

  function fetchingWithLoading(theFetchCall, category = null) {
    setLoading(true);
    theFetchCall(categoryType, category)
      .then((categoryData) => setToggleFunctionality(categoryData));
    setLoading(false);
  }

  function setCategoryData(category) {
    fetchingWithLoading(fetchByCategory, category);
  }

  const FOUR = 4;
  function renderButtons() {
    const result = categories[categoryType].map((category, index) => {
      if (index <= FOUR) {
        return (
          <Button
            key={ index }
            variant="secondary"
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ () => setCategoryData(category.strCategory) }
          >
            {category.strCategory}
          </Button>
        );
      }
      return null;
    });
    result.push(
      <Button
        key={ 5 }
        variant="secondary"
        data-testid="All-category-filter"
        onClick={ () => {
          setCategoryToggle(false);
          setCategoriesData([]);
        } }
      >
        All
      </Button>,
    );
    return result;
  }

  console.log(categoriesData);

  return (
    <div>
      {categories && categories[categoryType] && renderButtons()}
    </div>
  );
}

export default ButtonCategory;
