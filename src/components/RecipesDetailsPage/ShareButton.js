import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import imagem from '../../images/shareIcon.svg';

function ShareButton({ link }) {
  // referência do uso do clipboard com hooks
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const message = 'Link copied!';
  const [clipBoard, setClipBoard] = useState(false);

  const copyLink = (path) => {
    const { origin } = window.location;

    navigator.clipboard.writeText(`${origin}/${path}`);
    setClipBoard(true);
  };

  return (
    <div>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ () => copyLink(link) }
      >
        <img
          src={ imagem }
          alt="button"
        />
      </button>
      {
        clipBoard && <Alert variant="dark">{message}</Alert>
      }
    </div>
  );
}

ShareButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ShareButton;
