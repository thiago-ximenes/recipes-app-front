import React from 'react';
import PropTypes from 'prop-types';

function CardInProgress(props) {
  const { src, alt, title, category } = props;

  return (
    <section>
      <img alt={ alt } src={ src } data-testid="recipe-photo" />
      <h4 data-testid="recipe-title">{title}</h4>
      <p data-testid="recipe-category">{category}</p>
    </section>
  );
}

CardInProgress.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default CardInProgress;
