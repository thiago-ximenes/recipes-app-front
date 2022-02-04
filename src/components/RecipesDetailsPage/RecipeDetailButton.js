import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailButton(props) {
  const { buttonName, dataTestId } = props;
  return (
    <div>
      <button
        data-testid={ dataTestId }
        type="button"
      >
        {buttonName}
      </button>
    </div>
  );
}

RecipeDetailButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default RecipeDetailButton;
