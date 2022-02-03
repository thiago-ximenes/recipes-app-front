import React from 'react';
import PropTypes from 'prop-types';

function VideoFoods({ videoFoods }) {
  return (
    // https://www.w3schools.com/html/html_iframe.asp
    <div>
      <iframe
        data-testid="video"
        src={ videoFoods }
        title="video-food"
      >
        Check your recipe!
      </iframe>
    </div>
  );
}

VideoFoods.propTypes = {
  videoFoods: PropTypes.string.isRequired,
};

export default VideoFoods;
