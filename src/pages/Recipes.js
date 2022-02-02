import React, { useContext, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const { loading, data, domainName } = useContext(MyContext);

  const [recipeType, setRecipeType] = useState('meals');

  useEffect(() => {
    const routName = domainName === 'foods' ? 'meals' : 'drinks';
    setRecipeType(routName);
  });

  const recipeTypeCapitalized = recipeType.charAt(0)
    .toUpperCase() + recipeType.slice(1, recipeType.length - 1);

  return (
    !loading && (
      <div>
        <Header />
        { !data[recipeType]
          ? (
            <h2>{domainName}</h2>
          ) : data[recipeType].map((recipe, index) => (
            <Card
              style={ { width: '18rem' } }
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <Card.Title
                data-testid={ `${index}-recipe-card-name` }
              >
                {recipe[`str${recipeTypeCapitalized}`]}
              </Card.Title>
              <Card.Img
                variant="top"
                src={ recipe[`str${recipeTypeCapitalized}Thumb`] }
              />
            </Card>
          ))}
        <MenuInferior />
      </div>
    )
  );
}

export default Recipes;
