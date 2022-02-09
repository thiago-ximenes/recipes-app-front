import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';

// 360 x 640
function Header({ title = null }) {
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
    || capitalizePathname === 'Explore Foods Ingredients'
    || capitalizePathname === 'Explore Drinks Ingredients'
    || capitalizePathname === 'Profile'
    || title === 'Favorite Recipes'
    || title === 'Done Recipes'
    ) {
      setIsThereButton(false);
    }
  }, []);

  console.log(capitalizePathname);

  return (
    <Container>
      <Row
        className="justify-content-between"
      >
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
          { title !== null ? title : capitalizePathname }
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
      </Row>
      <Row
        className="justify-content-between"
      >
        {toggleSearch && (
          <HeaderSearch />
        )}
      </Row>
    </Container>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
