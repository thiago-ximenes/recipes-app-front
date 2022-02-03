import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalContext from '../../Context/GlobalContext';
import Drinkicon from '../../images/drinkIcon.svg';
import ExploreIncon from '../../images/exploreIcon.svg';
import FoodIcon from '../../images/mealIcon.svg';

export default function MenuInferior() {
  const history = useHistory();

  const { setDomainName } = useContext(GlobalContext);

  return (
    <footer
      className="fixed-bottom d-flex justify-content-between"
      data-testid="footer"
    >
      <button
        data-testid="food-bottom-btn"
        type="button"
        src={ FoodIcon }
        onClick={ () => {
          setDomainName('foods');
          history.push('/foods');
        } }
      >
        <img src={ FoodIcon } alt="ilustração com taça" />
      </button>
      <button
        data-testid="drinks-bottom-btn"
        type="button"
        src={ Drinkicon }
        onClick={ () => {
          history.push('/drinks');
          setDomainName('drinks');
        } }
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
