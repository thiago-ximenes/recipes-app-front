import React from 'react';
import { useHistory } from 'react-router-dom';

function FoodButton() {
  const history = useHistory();

  const onClick = () => {
    history.push('/explore/foods');
  };

  return (
    <div>
      <button
        data-testid="explore-foods"
        type="button"
        onClick={ onClick }
      >
        Explore Foods
      </button>
    </div>
  );
}

export default FoodButton;
