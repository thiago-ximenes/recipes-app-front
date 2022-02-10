import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DetailCard from '../components/DetailCard/DetailCard';
import FavoriteButton from '../components/RecipesDetailsPage/FavoriteButton';
import Ingredients from '../components/RecipesDetailsPage/Ingredients';
import Recommendation from '../components/RecipesDetailsPage/Recommendation';
import ShareButton from '../components/RecipesDetailsPage/ShareButton';
import StartDrinkButton from '../components/StartRecipeButtons/StartDrinkButton';
import { getDrinksDetails } from '../services/index';

function RecipeDrinksDetails(props) {
  // useParams do router
  const { match: { params: { id } } } = props;
  // state padrão da recipe a ser detalhada
  const [drinkRecipeDetail, setDrinkRecipeDetail] = useState({});
  const [foodRecommendation, setFoodRecommendation] = useState({});
  const [disableStartButton, setDisableStartButton] = useState(false);

  useEffect(() => {
    getDrinksDetails(id)
      .then((response) => setDrinkRecipeDetail(response.drinks[0]));
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((response) => setFoodRecommendation(response));
  }, []);

  const [ingredients, setIngredients] = useState([]);

  const listIngredients = () => {
    const totalIngredients = 15;
    const ingredientsUsed = [];
    // talvez ocorra um conflito entre esse index e o index nas props (??)
    for (let i = 1; i < totalIngredients; i += 1) {
      const ingredientsUsedList = drinkRecipeDetail[`strIngredient${i}`];
      // nem todas as opções tem info
      if (ingredientsUsedList !== '' && ingredientsUsedList !== null) {
        ingredientsUsed.push(ingredientsUsedList);
      }
    }
    setIngredients(ingredientsUsed);
  };

  const [measures, setMeasures] = useState([]);

  const ingredientMeasures = () => {
    const totalMeasures = 15;
    const measuresUsed = [];
    for (let i = 1; i < totalMeasures; i += 1) {
      const measuresUsedList = drinkRecipeDetail[`strMeasure${i}`];
      if (measuresUsedList !== '' && measuresUsedList !== null) {
        measuresUsed.push(measuresUsedList);
      }
    }
    setMeasures(measuresUsed);
  };

  function checkIfRecipeIsDone() {
    const localStorageDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setDisableStartButton(localStorageDone.some((
      recipe,
    ) => recipe.id === drinkRecipeDetail.id));
  }

  useEffect(() => {
    listIngredients();
    ingredientMeasures();
    checkIfRecipeIsDone();
  }, [drinkRecipeDetail]);

  return (
    <div>
      <DetailCard
        src={ drinkRecipeDetail.strDrinkThumb }
        alt={ drinkRecipeDetail.strDrink }
        title={ drinkRecipeDetail.strDrink }
        category={ drinkRecipeDetail.strAlcoholic }
        instructions={ drinkRecipeDetail.strInstructions }
      />
      <Ingredients ingredients={ ingredients } measures={ measures } />
      <ShareButton link={ `drinks/${id}` } />
      <FavoriteButton
        buttonName="drink"
        drinkRecipeDetail={ drinkRecipeDetail }
        id={ id }
      />
      <Recommendation
        recommendations={ foodRecommendation }
        type="meals"
      />
      { !disableStartButton
      && <StartDrinkButton
        name="drink"
        id={ drinkRecipeDetail.idDrink }
        ingredients={ ingredients }
      />}
    </div>
  );
}

RecipeDrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeDrinksDetails;
