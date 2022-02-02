import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';
import fetchApi from '../../services/fetchApi';

function SurpriseButtons(props) {
  const history = useHistory();
  const { buttonName, typeRecipe } = props;

  const { data, setData } = useContext(MyContext);

  function fetchRecipeRandom() {
    const routeName = typeRecipe === 'Foods' ? 'themealdb' : 'thecocktaildb';
    const url = `https://www.${routeName}.com/api/json/v1/1/random.php`;

    fetchApi(url).then((result) => {
      console.log(result);
      setData(result);
      // console.log(data.meals);
    });
  }

  const onClick = () => {
    fetchRecipeRandom();
    let pathName = '';
    const local = history.location.pathname;

    if (buttonName === 'Ingredient') pathName = `${local}/${buttonName.toLowerCase()}s`;
    if (buttonName === 'Nationality') pathName = `${local}/nationalities`;
    if (buttonName === 'Surprise') {
      if (typeRecipe === 'Foods') {
        pathName = `foods/${data.meals[0].idMeal}`;
      } else {
        pathName = `drinks/${data.drinks[0].idDrink}`;
      }
    }

    history.push(pathName);
  };

  return (
    <div>
      <button
        data-testid={ buttonName !== 'Surprise'
          ? `explore-by-${buttonName.toLowerCase()}`
          : `explore-${buttonName.toLowerCase()}` }
        type="button"
        onClick={ () => onClick() }
      >
        {
          (buttonName === 'Ingredient' || buttonName === 'Nationality')
            ? `By ${buttonName}`
            : 'Surprise me!'
        }
      </button>
    </div>
  );
}

SurpriseButtons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  typeRecipe: PropTypes.string.isRequired,
};

export default SurpriseButtons;
