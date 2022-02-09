import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import localStorageHook from '../../hooks/localStorageHook';
import '../../style/style.css';

function StartDrinkButton(props) {
  const history = useHistory();
  const { name, id, ingredients } = props;
  // console.log(ingredients);
  const { pathname } = useLocation();
  const recipeType = pathname.includes('drinks') ? 'cocktails' : 'meals';
  // console.log(recipeType);

  const recipeObject = {
    cocktails: {},
    meals: {},
  };

  const [isRecipeInProgress, isSetRecipeInProgress] = useState(false);
  const [inProgressLocalStorage,
    setInProgressLocalStorage] = localStorageHook('inProgressRecipes', recipeObject);

  useEffect(() => { // did mount & update
    // const getRecipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    // const { meals, cocktails } = getRecipesInProgress; // é um objeto com dois objetos
    // https://www.freecodecamp.org/news/the-javascript-in-operator-explained-with-examples/#:~:text=The%20JavaScript%20in%20operator%20is,if%20the%20specified%20property%20exists.
    const checkRecipe = id in inProgressLocalStorage[recipeType]; // in devolver true ou false, checando a existencia de alguma propriedade
    isSetRecipeInProgress(checkRecipe);
  }, [id, inProgressLocalStorage, recipeType]);

  const addRecipeInProgress = () => {
    if (!isRecipeInProgress) {
      setInProgressLocalStorage((recipe) => ({
        ...recipe,
        [cocktails]: { ...recipe[cocktails], [id]: [ingredients] },
      }));
      isSetRecipeInProgress(true);
    }
    history.push(`/drinks/${id}/in-progress`);
  };

  return (
    <div>
      <button
        className="start-button"
        data-testid="start-recipe-btn"
        type="button"
        name={ name }
        onClick={ addRecipeInProgress }
      >
        {(isRecipeInProgress) ? 'Continue Recipe' : 'Start Recipe'}
      </button>
    </div>
  );
}

StartDrinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StartDrinkButton;
