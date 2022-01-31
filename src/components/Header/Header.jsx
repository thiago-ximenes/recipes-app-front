import React, { useState } from 'react';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import PropTypes from 'prop-types';

// 360 x 640
function Header({ history }) {

  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ profile }
          alt="Profile Icon"
        />
      </button>
      <h1
        data-testid="page-title"
      >
        Profile
      </h1>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setToggleSearch(!toggleSearch) }
      >
        <img
          src={ search }
          alt="Search Icon"
        />
      </button>
      {toggleSearch && (
        <input
          type="text"
          data-testid="search-input"
        />
      )}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
