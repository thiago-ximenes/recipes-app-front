import React from 'react';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';

function Header() {
  return (
  <div>
    <img
      src={profile}
      alt="Profile Icon"
      data-testid="profile-top-btn"
    />
    <h1
      data-testid="page-title"
    >
      Profile
    </h1>
    <img
      src={search}
      alt="Search Icon"
      data-testid="search-top-btn"
    />

  </div>
  );
}

export default Header;
