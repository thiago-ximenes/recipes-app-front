import PropTypes from 'prop-types';
import React from 'react';
import localStorageHook from '../../hooks/localStorageHook';
import blackHeart from '../../images/blackHeartIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';

function FavoriteButton(props) {
  const { foodRecipeDetail, drinkRecipeDetail, buttonName, id } = props;

  const recipesStored = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // console.log(recipesStored);
  // console.log(typeof recipesStored);
  const [favorite, setFavorite] = localStorageHook('favoriteRecipes', []);

  const isFavorite = () => {
    if (recipesStored) {
      return recipesStored.some((recipe) => recipe.id === id);
    }
    return false;
  };

  const addFoodToFavorite = () => {
    const { idMeal, strArea, strCategory,
      strMeal, strMealThumb } = foodRecipeDetail;
    const newFavorite = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    return newFavorite;
  };

  const addDrinkToFavorite = () => {
    const { strDrink, strDrinkThumb,
      strCategory, strAlcoholic, idDrink } = drinkRecipeDetail;
    console.log(strAlcoholic);
    const newFavorite = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    return newFavorite;
  };

  const addToFavorite = () => {
    if (buttonName === 'food') {
      setFavorite([...favorite, addFoodToFavorite()]);
    } else {
      setFavorite([...favorite, addDrinkToFavorite()]);
    }
  };

  const removeFavorite = () => {
    if (isFavorite()) {
      const removedRecipe = recipesStored.filter((recipe) => recipe.id !== id);
      return setFavorite(removedRecipe);
    }
    return addToFavorite();
  };

  return (
    <div>
      <button
        type="button"
        buttonName={ buttonName }
        onClick={ () => removeFavorite() }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite() ? blackHeart : whiteHeart }
          alt="favorite-btn"
        />
        Favorite
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  foodRecipeDetail: PropTypes.objectOf(PropTypes.string).isRequired,
  drinkRecipeDetail: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default FavoriteButton;
