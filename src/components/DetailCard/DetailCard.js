import PropTypes from 'prop-types';
import React from 'react';

function DetailCard(props) {
  const { src, title, category, alt, instructions, tagName } = props;
  return (
    <div>
      <img
        style={ { width: '18%' } }
        data-testid="recipe-photo"
        src={ src }
        alt={ alt }
        tagName={ tagName }
      />
      <div>
        <span data-testid="recipe-title">
          { title }
        </span>
        <span data-testid="recipe-category">
          { category }
        </span>
      </div>
      <div>
        <span data-testid="instructions">
          { instructions }
        </span>
      </div>
    </div>
  );
}

DetailCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};

export default DetailCard;
