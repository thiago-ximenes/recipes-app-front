import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import MyHeaderSearchProvider
from '../../Context/MyHeaderSearchContext/MyHeaderSearchProvider';
import HeaderSearch from './HeaderSearch';

// 360 x 640
function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const history = useHistory();
  const [isThereButton, setIsThereButton] = useState(true);

  // https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
  // Como fazer uma string com a primeira letra maiúscula

  const capitalize = history.location.pathname.split('/');
  const capitalizePathname = capitalize.filter((empty) => empty !== '').map((word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  }).join(' ');

  useEffect(() => {
    if (capitalizePathname === 'Explore'
    || capitalizePathname === 'Explore Foods'
    || capitalizePathname === 'Explore Drinks'
    || capitalizePathname === 'Explore Foods Ingredients') {
      setIsThereButton(false);
    }
  }, [capitalizePathname]);

  return (
    <MyHeaderSearchProvider>
      <div className=" d-flex flex-row justify-content-between">
        <button
          src={ profile }
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
          { capitalizePathname }
        </h1>
        { isThereButton && (
          <button
            src={ search }
            type="button"
            data-testid="search-top-btn"
            onClick={ () => setToggleSearch(!toggleSearch) }
          >
            <img
              src={ search }
              alt="Search Icon"
            />
          </button>
        ) }
        {toggleSearch && (
          <HeaderSearch />
        )}
      </div>
    </MyHeaderSearchProvider>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
