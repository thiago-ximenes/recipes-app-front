import React from 'react';
import whiteHeart from '../../images/whiteHeartIcon.svg';
// import blackHeart from '../../images/blackHeartIcon.svg';

function FavoriteButton() {
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
