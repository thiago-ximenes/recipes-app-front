import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SurpriseButtons(props) {
  const history = useHistory();
  const { buttonName } = props;

  const onClick = () => {
    let pathName = '';
    const local = history.location.pathname;

    if (buttonName === 'Ingredient') pathName = `${local}/${buttonName.toLowerCase()}s`;
    if (buttonName === 'Nationality') pathName = `${local}/nationalities`;
    // if (buttonName === 'Surprise') pathName = `foods/${id aleatorio}`; // Redirecionar para comida aleatoria

    history.push(pathName);
    console.log(buttonName);
  };

  return (
    <div>
      <button
        data-testid={ buttonName !== 'Surprise'
          ? `explore-by-${buttonName.toLowerCase()}`
          : `explore-${buttonName.toLowerCase()}` }
        type="button"
        onClick={ () => onClick() }
      >
        {
          (buttonName === 'Ingredient' || buttonName === 'Nationality')
            ? `By ${buttonName}`
            : 'Surprise me!'
        }
      </button>
    </div>
  );
}

SurpriseButtons.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default SurpriseButtons;
