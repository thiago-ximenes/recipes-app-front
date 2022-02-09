import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDrinksDetails } from '../Services';
import CardInProgress from '../components/Progress/CardInProgress';
import IngredientsInProgress from '../components/Progress/IngredientsInProgress';
import ButtonFinish from '../components/Progress/ButtonFinish';
import FavoriteButton from '../components/RecipesDetailsPage/FavoriteButton';
import ShareButton from '../components/RecipesDetailsPage/ShareButton';

function DrinksInProgress(props) {
  const { match: { params: { id } } } = props;
  const [recipeDrinkInProgress, setRecipeDrinkInProgress] = useState({});

  useEffect(() => {
    getDrinksDetails(id)
      .then((response) => setRecipeDrinkInProgress(response.drinks[0]));
  }, []);

  const renderIngredients = () => {
    if (!recipeDrinkInProgress) {
      return null;
    }
    // https://stackoverflow.com/questions/20485270/javascript-how-can-i-get-all-the-keys-and-values-of-an-object-that-begin-with-a
    const list = Object.keys(recipeDrinkInProgress).filter(
      (key) => key.indexOf('strIngredient') === 0,
    ).reduce((ingredients, ingredient) => {
      if (recipeDrinkInProgress[ingredient]) {
        ingredients.push(recipeDrinkInProgress[ingredient]);
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
        src={ recipeDrinkInProgress.strDrinkThumb }
        alt={ recipeDrinkInProgress.strDrink }
        title={ recipeDrinkInProgress.strDrink }
        category={ recipeDrinkInProgress.strCategory }
      />
      <ShareButton link={ `drinks/${id}` } />
      <FavoriteButton
        buttonName="drink"
        drinkRecipeDetail={ recipeDrinkInProgress }
        id={ id }
      />

      {renderIngredients()}

      <div>
        <p data-testid="instructions">{recipeDrinkInProgress.strInstructions}</p>
      </div>

      <ButtonFinish />
    </div>
  );
}

DrinksInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default DrinksInProgress;
