import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ShareButton from '../RecipesDetailsPage/ShareButton';

function DoneRecipesMain() {
  const history = useHistory();

  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (localStorage.getItem('doneRecipes') !== null) {
      setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, []);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
      >
        Drinks
      </button>
      {doneRecipes.length && doneRecipes.filter((recipe) => {
        if (filter === 'food') {
          return recipe.type === 'food';
        } if (filter === 'drink') {
          return recipe.type === 'drink';
        }
        return true;
      })
        .map((recipe, index) => (
          <Card
            key={ recipe.name }
          >
            <Card.Img
              variant="top"
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
              onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
            />
            <Card.Body>
              <Card.Text
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
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
                link={ `${recipe.type}s/${recipe.id}` }
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
