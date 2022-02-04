import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ ingredients, measures }) {
  return (
    <div>
      <ul>
        <li>
          { ingredients.map((ingredient, index) => (
            <div
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              <li>
                { `${ingredient} - ${measures[index]}` }
              </li>
            </div>
          )) }
        </li>
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
