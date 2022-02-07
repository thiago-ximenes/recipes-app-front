import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';

function FavoriteButton(props) {
  const { setLocalStorageToken } = useContext(GlobalContext);
  const { foodRecipeDetail, drinkRecipeDetail, buttonName } = props;
  // const favoriteInLocalStorage = localStorage.getItem('favoriteRecipes');
  // console.log(favoriteInLocalStorage);

  // checa se há algo no LS
  const isFavorite = () => {
    const favoriteRecipe = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipe) return true;
    return false;
  };

  // estava havendo problema no teste entao optou-se em dividir
  // faltam [] nos favoritos, dava para ter deixado tudo junto afinal!!
  const addFoodToFavorite = () => {
    const { idMeal, strArea, strCategory,
      strMeal, strMealThumb } = foodRecipeDetail;
    const newFavoriteFood = [{
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    }];
    const favoriteFood = localStorage
      .setItem('favoriteRecipes', [JSON.stringify(newFavoriteFood)]);
    setLocalStorageToken(favoriteFood);
  };

  const addDrinkToFavorite = () => {
    const { strDrink, strDrinkThumb,
      strDrinkCategory, strAlcoholic, idDrink } = drinkRecipeDetail;
    const newFavoriteDrink = [{
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strDrinkCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    }];
    const favoriteDrink = localStorage
      .setItem('favoriteRecipes', [JSON.stringify(newFavoriteDrink)]);
    setLocalStorageToken(favoriteDrink);
  };

  const addToFavorite = () => {
    if (buttonName === 'food') {
      addFoodToFavorite();
    }
    if (buttonName === 'drink') {
      addDrinkToFavorite();
    }
  };

  return (
    <div>
      <button
        data-testid="favorite-btn"
        type="button"
        buttonName={ buttonName }
        onClick={ () => addToFavorite() }
      >
        <img
          src={ isFavorite() ? blackHeart : whiteHeart }
          alt="button"
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
};

export default FavoriteButton;
