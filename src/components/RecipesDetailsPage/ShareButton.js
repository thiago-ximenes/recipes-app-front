import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import imagem from '../../images/shareIcon.svg';

function ShareButton({ testId, hrefLink = null }) {
  // referência do uso do clipboard com hooks
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const [clipBoard, setClipBoard] = useState('');
  const copiedLink = hrefLink === null ? window.location.href : hrefLink;
  // console.log(copiedLink);

  const copyLink = () => {
    if (!navigator.clipboard) {
      console.log('Oops, clipboard undefined!');
    } else {
      navigator.clipboard.writeText(copiedLink);
      clipboardCopy(copiedLink);
      setClipBoard('Link copied!');
    }
  };

  return (
    <div>
      <button
        data-testid={ testId }
        type="button"
        onClick={ () => copyLink() }
        src={ imagem }
      >
        <img
          alt="button"
          src={ imagem }
        />
        Share
        {clipBoard}
      </button>
    </div>
  );
}

ShareButton.propTypes = {
  testId: PropTypes.string.isRequired,
  hrefLink: PropTypes.string.isRequired,
};

export default ShareButton;
