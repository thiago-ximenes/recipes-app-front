import React from 'react';
import PropTypes from 'prop-types';

function IngredientsInProgress({ ingredient }) {
  return (
    <div>
      <label htmlFor={ ingredient }>
        <input type="checkbox" />
        {ingredient}
      </label>
    </div>
  );
}

IngredientsInProgress.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default IngredientsInProgress;
