import React from 'react';
import { useHistory } from 'react-router-dom';

function DrinkButton() {
  const history = useHistory();

  const onClick = () => {
    history.push('/explore/drinks');
  };

  return (
    <div>
      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ onClick }
      >
        Explore Drinks
      </button>
    </div>
  );
}

export default DrinkButton;
