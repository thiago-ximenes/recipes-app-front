import React, { useContext, useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ButtonCategory from '../components/ButtonCategory/ButtonCategory';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import GlobalContext from '../Context/GlobalContext';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const history = useHistory();

  const { loading, data, setData, setLoading } = useContext(MyContext);

  const { domainNameUrl } = useContext(GlobalContext);

  const [recipeType, setRecipeType] = useState('meals');

  useEffect(() => {
    const domainName = history.location.pathname.split('/')[1];
    const routName = domainName === 'foods' ? 'meals' : 'drinks';
    setRecipeType(routName);
  }, []);

  useEffect(() => {
    let domainName = history.location.pathname.split('/')[1];
    domainName = domainNameUrl === domainName ? domainNameUrl : domainName;
    const domainUrl = domainName === 'foods' ? 'themealdb' : 'thecocktaildb';

    const url = `https://www.${domainUrl}.com/api/json/v1/1/search.php?s=`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));

    const routName = domainName === 'foods' ? 'meals' : 'drinks';
    setRecipeType(routName);
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
    const result = data[recipeType].map((recipe, index) => {
      if (index <= ELEVEN) {
        return (
          <Row
            className="justify-content-center"
            key={ `${index.toString()}-card-name` }
            data-testid={ `${index}-recipe-card` }
          >
            <Card
              style={ { width: '18rem' } }
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
    !loading ? (
      <div>
        <Header />
        <ButtonCategory />
        { data && data[recipeType] && data[recipeType].length && renderData()}
        <MenuInferior />
      </div>
    ) : (
      <h2>Loading...</h2>
    )
  );
}

export default Recipes;
