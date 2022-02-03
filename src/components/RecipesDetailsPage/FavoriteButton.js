import React from 'react';
import whiteHeart from '../../images/whiteHeartIcon.svg';
// import blackHeart from '../../images/blackHeartIcon.svg';

function FavoriteButton() {
  // doneRecipes: [{
  //   id: '',
  //   type: '',
  //   nationality: '',
  //   category: '',
  //   alcoholicOrNot: '',
  //   name: '',
  //   image: '',
  //   doneDate: '',
  //   tags: '',
  // }],
  return (
    <div>
      <button
        data-testid="favorite-btn"
        type="button"
        // onClick={ () => turnFavorite() }
      >
        <img
          src={ whiteHeart }
          alt="button"
        />
        Favorite
      </button>
    </div>
  );
}

export default FavoriteButton;
