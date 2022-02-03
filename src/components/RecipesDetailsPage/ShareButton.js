import React, { useState } from 'react';
import imagem from '../../images/shareIcon.svg';

function ShareButton() {
  // referência do uso do clipboard com hooks
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const [clipBoard, setClipBoard] = useState('');
  const copiedLink = window.location.href;
  // console.log(copiedLink);

  const copyLink = () => {
    navigator.clipboard.writeText(copiedLink);
    setClipBoard('Link copied!');
  };

  return (
    <div>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ () => copyLink() }
      >
        <img
          src={ imagem }
          alt="button"
        />
        Share
        {clipBoard}
      </button>
    </div>
  );
}

export default ShareButton;
