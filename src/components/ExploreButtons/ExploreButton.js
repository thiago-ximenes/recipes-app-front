import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ExploreButton(props) {
  const history = useHistory();
  const { buttonName } = props;

  const onClick = () => {
    // buttonName é o name do button
    const pathName = `/explore/${buttonName.toLowerCase()}`;
    history.push(pathName);
  };

  return (
    <div>
      <button
        data-testid={
          buttonName !== 'Foods' && buttonName !== 'Drinks' && buttonName !== 'Surprise'
            ? `explore-by-${buttonName.toLowerCase()}`
            : `explore-${buttonName.toLowerCase()}`
        }
        type="button"
        onClick={ () => onClick() }
      >
        {(buttonName === 'Foods') && `Explore ${buttonName}`}
        {(buttonName === 'Drinks') && `Explore ${buttonName}`}
        {(buttonName === 'Ingredient') && `By ${buttonName}`}
        {(buttonName === 'Nationality') && `By ${buttonName}`}
        {(buttonName === 'Surprise') && 'Surprise me!'}
      </button>
    </div>
  );
}

ExploreButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default ExploreButton;
