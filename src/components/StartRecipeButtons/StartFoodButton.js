import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../../style/style.css';

function StartFoodButton(props) {
  const { name, id } = props;
  const history = useHistory();
  const onClick = () => {
    // aparentemente há um problema nesse redirecionamento
    // talvez duplicar essa botão um para cada página
    // if (name === 'foods') {
    history.push(`/foods/${id}/in-progress`);
    // } else {
    //   history.push(`/drinks/${id}/in-progress`);
    // }
  };
  return (
    <div>
      <button
        className="start-button"
        data-testid="start-recipe-btn"
        type="button"
        name={ name }
        onClick={ () => onClick() }
      >
        Start Recipe
      </button>
    </div>
  );
}

StartFoodButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StartFoodButton;
