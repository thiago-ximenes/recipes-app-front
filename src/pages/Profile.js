import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior'; // teste
import Header from '../components/Header/Header';
import ProfileButtons from '../components/ProfileButtons/ProfileButtons';

export default function Profile() {
  const email = localStorage.getItem('user');
  return (
    <div>
      <Header />
      <MenuInferior />
      <ProfileButtons
        buttonName="Done Recipes"
        dataTestId="profile-done-btn"
      />
      <ProfileButtons
        buttonName="Favorite Recipes"
        dataTestId="profile-favorite-btn"
      />
      <ProfileButtons
        buttonName="Logout"
        dataTestId="profile-logout-btn"
      />
      <span data-testid="profile-email">{ email }</span>
    </div>
  );
}
