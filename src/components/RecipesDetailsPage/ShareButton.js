import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import imagem from '../../images/shareIcon.svg';

function ShareButton({ link, testId }) {
  // referência do uso do clipboard com hooks
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const message = 'Link copied!';
  const [clipBoard, setClipBoard] = useState(false);

  const copyLink = (path) => {
    const { origin } = window.location;

    // console.log(origin);
    // console.log(path);

    navigator.clipboard.writeText(`${origin}/${path}`);
    setClipBoard(true);
  };

  return (
    <div>
      <button
        data-testid={ testId }
        type="button"
        src={ imagem }
        onClick={ () => copyLink(link) }
      >
        <img
          alt="button"
          src={ imagem }
        />
      </button>
      {
        clipBoard && <Alert variant="dark">{message}</Alert>
      }
    </div>
  );
}

ShareButton.propTypes = {
  testId: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ShareButton;
