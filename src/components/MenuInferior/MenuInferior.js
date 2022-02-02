import React from 'react';
import Drinkicon from '../../images/drinkIcon.svg';
import ExploreIncon from '../../images/exploreIcon.svg';
import FoodIcon from '../../images/mealIcon.svg';

export default function MenuInferior() {
  return (
    <footer
      className="fixed-bottom d-flex justify-content-between"
      data-testid="footer"
    >
      <button data-testid="food-bottom-btn" type="button" source={ FoodIcon }>
        <img src={ FoodIcon } alt="ilustração com taça" />
      </button>
      <button data-testid="drinks-bottom-btn" type="button" source={ Drinkicon }>
        <img src={ Drinkicon } alt="ilustração com taça" />
      </button>
      <button data-testid="explore-bottom-btn" type="button" source={ ExploreIncon }>
        <img src={ ExploreIncon } alt="ilustração com taça" />
      </button>
    </footer>
  );
}
