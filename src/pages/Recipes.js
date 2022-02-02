import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Container, Row } from 'react-bootstrap';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const history = useHistory();

  const { loading, data } = useContext(MyContext);

  const [recipeType, setRecipeType] = useState('meals');

  useEffect(() => {
    const domainName = history.location.pathname.split('/')[1];
    const routName = domainName === 'foods' ? 'meals' : 'drinks';
    console.log(routName);
    setRecipeType(routName);
  }, []);

  const recipeTypeCapitalized = recipeType.charAt(0)
    .toUpperCase() + recipeType.slice(1, recipeType.length - 1);

  const ELEVEN = 11;

  function renderData() {
    let result = [];
    if (data[recipeType].length > 1) {
      result = data[recipeType].map((recipe, index) => {
        if (index <= ELEVEN) {
          return (
            <Row
              className="justify-content-md-center"
              data-testid={ `${index}-recipe-card` }
            >
              <Card
                style={ { width: '18rem' } }
                key={ index }
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
    }
    return result;
  }

  return (
    !loading && (
      <div>
        <Header />
        <Container
          fluid="sm"
        >
          { !data[recipeType]
            ? (
              <h2>Recipes</h2>
            ) : renderData()}
        </Container>
        <MenuInferior />
      </div>
    )
  );
}

export default Recipes;
