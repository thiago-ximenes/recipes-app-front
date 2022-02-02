import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Drinkicon from '../../images/drinkIcon.svg';
import ExploreIncon from '../../images/exploreIcon.svg';
import FoodIcon from '../../images/mealIcon.svg';

export default function MenuInferior() {
  const history = useHistory();

  return (
    <footer
      className="fixed-bottom d-flex justify-content-between"
      data-testid="footer"
    >
      <button
        data-testid="food-bottom-btn"
        type="button"
        src={ FoodIcon }
        onClick={ () => history.push('/foods') }
      >
        <img src={ FoodIcon } alt="ilustração com taça" />
      </button>
      <button
        data-testid="drinks-bottom-btn"
        type="button"
        src={ Drinkicon }
        onClick={ () => history.push('/drinks') }
      >
        <img src={ Drinkicon } alt="ilustração com taça" />
      </button>
      <button
        data-testid="explore-bottom-btn"
        type="button"
        src={ ExploreIncon }
        onClick={ () => history.push('/explore') }
      >
        <img src={ ExploreIncon } alt="ilustração com taça" />
      </button>
    </footer>
  );
}
