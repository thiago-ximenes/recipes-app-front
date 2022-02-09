import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardInProgress from '../components/Progress/CardInProgress';
import { getFoodDetails } from '../services';
import IngredientsInProgress from '../components/Progress/IngredientsInProgress';
import ButtonFinish from '../components/Progress/ButtonFinish';
import FavoriteButton from '../components/RecipesDetailsPage/FavoriteButton';
import ShareButton from '../components/RecipesDetailsPage/ShareButton';

function FoodsInProgress(props) {
  const { match: { params: { id } } } = props;
  const [recipeInProgress, setRecipeInProgress] = useState({});

  useEffect(() => {
    getFoodDetails(id)
      .then((response) => setRecipeInProgress(response.meals[0]));
  }, []);

  const renderIngredients = () => {
    if (!recipeInProgress) {
      return null;
    }
    // https://stackoverflow.com/questions/20485270/javascript-how-can-i-get-all-the-keys-and-values-of-an-object-that-begin-with-a
    const list = Object.keys(recipeInProgress).filter(
      (key) => key.indexOf('strIngredient') === 0,
    ).reduce((ingredients, ingredient) => {
      if (recipeInProgress[ingredient]) {
        ingredients.push(recipeInProgress[ingredient]);
      }

      return ingredients;
    }, []);

    return list.map((ingredient, index) => (
      <div
        key={ ingredient }
        data-testid={ `${index}-ingredient-step` }
      >
        <IngredientsInProgress
          ingredient={ ingredient }
        />
      </div>
    ));
  };

  return (
    <div>
      <CardInProgress
        src={ recipeInProgress.strMealThumb }
        alt={ recipeInProgress.strMeal }
        title={ recipeInProgress.strMeal }
        category={ recipeInProgress.strCategory }
      />
      <ShareButton link={ `foods/${id}` } />
      <FavoriteButton buttonName="food" foodRecipeDetail={ recipeInProgress } id={ id } />

      {renderIngredients()}

      <div>
        <p data-testid="instructions">{recipeInProgress.strInstructions}</p>
      </div>
      <ButtonFinish />
    </div>
  );
}

FoodsInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodsInProgress;
