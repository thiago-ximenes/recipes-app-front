import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ProfileButtons(props) {
  const history = useHistory();
  const { buttonName, dataTestId } = props;

  function onClick() {
    if (buttonName === 'Done Recipes') {
      history.push('/done-recipes');
    } else if (buttonName === 'Favorite Recipes') {
      history.push('/favorite-recipes');
    } else {
      history.push('/');
      localStorage.clear();
    }
  }

  return (
    <div>
      <button
        data-testid={ dataTestId }
        type="button"
        onClick={ () => onClick() }
      >
        { buttonName }
      </button>
    </div>
  );
}

ProfileButtons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ProfileButtons;
