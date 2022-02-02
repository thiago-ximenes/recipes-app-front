import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ExploreFoodDrinkButtons(props) {
  const history = useHistory();
  const { buttonName } = props;

  const onClick = () => {
    let pathName = '';
    const local = history.location.pathname;

    if (buttonName === 'Ingredient') pathName = `${local}/${buttonName.toLowerCase()}s`;
    if (buttonName === 'Surprise') pathName = `${buttonName.toLowerCase()}s`;
    if (buttonName === 'Nationality') pathName = `${local}/nationalities`;

    history.push(pathName);
  };

  return (
    <div>
      <button
        data-testid={
          buttonName !== 'Surprise'
            ? `explore-by-${buttonName.toLowerCase()}`
            : `explore-${buttonName.toLowerCase()}`
        }
        type="button"
        onClick={ () => onClick() }
      >
        {(buttonName === 'Ingredient') && `By ${buttonName}`}
        {(buttonName === 'Nationality') && `By ${buttonName}`}
        {(buttonName === 'Surprise') && 'Surprise me!'}
      </button>
    </div>
  );
}

ExploreFoodDrinkButtons.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default ExploreFoodDrinkButtons;
