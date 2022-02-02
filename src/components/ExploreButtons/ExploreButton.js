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
        data-testid={ `explore-${buttonName.toLowerCase()}` }
        type="button"
        onClick={ () => onClick() }
      >
        {`Explore ${buttonName}`}
      </button>
    </div>
  );
}

ExploreButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default ExploreButton;
