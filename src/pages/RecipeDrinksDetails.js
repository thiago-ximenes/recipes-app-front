import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailCard from '../components/DetailCard/DetailCard';
import { getDrinksDetails } from '../Services/index';
import StartRecipeButton from '../components/StarRecipeButtons/StartRecipeButtons';
import Ingredients from '../components/RecipesDetailsPage/Ingredients';
import Recomendation from '../components/RecipesDetailsPage/Recomendation';
import ShareButton from '../components/RecipesDetailsPage/ShareButton';
import FavoriteButton from '../components/RecipesDetailsPage/FavoriteButton';

function RecipeDrinksDetails(props) {
  // useParams do router
  const { match: { params: { id } } } = props;
  // state padrão da recipe a ser detalhada
  const [drinkRecipeDetail, setDrinkRecipeDetail] = useState({});

  useEffect(() => {
    getDrinksDetails(id)
      .then((response) => setDrinkRecipeDetail(response.drinks[0]));
  }, []);

  console.log(drinkRecipeDetail);

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
    // console.log(ingredientsUsed); // pega os ingredients --> ok
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

  useEffect(() => {
    listIngredients();
    ingredientMeasures();
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
      <FavoriteButton />
      <ShareButton />
      <Recomendation />
      <StartRecipeButton
        name="drink"
        id={ drinkRecipeDetail.idDrink }
      />
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
