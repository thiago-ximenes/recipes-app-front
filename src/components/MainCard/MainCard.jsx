import React, { useContext, useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';

function MainCard() {
  const history = useHistory();

  const {
    data,
    categoriesData,
    setData,
    setLoading,
    onClickCard,
  } = useContext(MyContext);

  const { domainNameUrl, categoryToggle } = useContext(GlobalContext);
  const [recipeType, setRecipeType] = useState('meals');
  const [recipeData, setRecipeData] = useState([]);

  function getDomainName() {
    const domainName = history.location.pathname.split('/')[1];
    const routName = {
      drinks: 'drinks',
      foods: 'meals',
    };
    setRecipeType(routName[domainName]);
  }

  useEffect(() => {
    getDomainName();
  }, []);

  useEffect(() => {
    if (categoryToggle) setRecipeData(categoriesData);
    else setRecipeData(data);
  }, [categoriesData]);

  useEffect(() => {
    if (!categoryToggle) setRecipeData(data);
    else setRecipeData(categoriesData);
  }, [data]);

  useEffect(() => {
    let domainName = history.location.pathname.split('/')[1];
    domainName = domainNameUrl === domainName ? domainNameUrl : domainName;
    const domainUrl = {
      foods: 'themealdb',
      drinks: 'thecocktaildb',
    };

    const url = `https://www.${domainUrl[domainName]}.com/api/json/v1/1/search.php?s=`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));

    const routName = {
      drinks: 'drinks',
      foods: 'meals',
    };
    setRecipeType(routName[domainName]);
    setLoading(false);
  }, [domainNameUrl]);

  const recipeTypeCapitalized = recipeType.charAt(0)
    .toUpperCase() + recipeType.slice(1, recipeType.length - 1);

  const ELEVEN = 11;

  if (data && data[recipeType] === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    setData(data[recipeType] = []);
  }

  function renderData() {
    const result = recipeData[recipeType].map((recipe, index) => {
      if (index <= ELEVEN) {
        return (
          <Row
            className="justify-content-center"
            key={ `${index.toString()}-card-name` }
            data-testid={ `${index}-recipe-card` }
          >
            <Card
              style={ { width: '18rem' } }
              onClick={ () => onClickCard(recipe) }
              role="button"
            >
              <Card.Title
                data-testid={ `${index.toString()}-card-name` }
              >
                {recipe[`str${recipeTypeCapitalized}`]}
              </Card.Title>
              <img
                alt={ `${recipe[`str${recipeTypeCapitalized}`]}` }
                src={ recipe[`str${recipeTypeCapitalized}Thumb`] }
                data-testid={ `${index.toString()}-card-img` }
              />
            </Card>
          </Row>
        );
      }
      return null;
    });
    return result;
  }

  return (
    <div>
      { recipeData && recipeData[recipeType]
      && recipeData[recipeType].length && renderData() }
    </div>

  );
}

export default MainCard;
