import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ShareButton from '../RecipesDetailsPage/ShareButton';

function DoneRecipesMain() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('doneRecipes') !== null) {
      setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, []);

  console.log(doneRecipes);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {doneRecipes.length && doneRecipes.map((recipe, index) => (
        <Card
          key={ recipe.name }
        >
          <Card.Img
            variant="top"
            src={ recipe.image }
            data-testid={ `${index}-horizontal-image` }
          />
          <Card.Body>
            <Card.Text
              data-testid={ `${index}-horizontal-name` }
            >
              { recipe.name }
            </Card.Text>
            <Card.Title
              data-testid={ `${index}-horizontal-top-text` }
            >
              { recipe.name }
            </Card.Title>
            { recipe.type === 'food' ? (
              <Card.Text
                data-testid={ `${index}-horizontal-top-text` }
              >
                { `${recipe.nationality} - ${recipe.category}`}
              </Card.Text>
            )
              : (
                <Card.Text
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipe.alcoholicOrNot}
                </Card.Text>
              )}
            <span
              data-testid={ `${index}-horizontal-done-date` }
            >
              {recipe.doneDate}
            </span>
            <ShareButton
              testId={ `${index}-horizontal-share-btn` }
              hrefLink={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
            />
            <span>
              {recipe.tags.map((tag) => (
                <span
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </span>
              ))}
            </span>
          </Card.Body>
        </Card>

      ))}
    </div>
  );
}

export default DoneRecipesMain;
