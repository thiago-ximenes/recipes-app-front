import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import Nationality from '../components/Nationality/Nationality';

function ExploreNationalities() {
  return (
    <div>
      <Header />
      <Nationality />
      <MenuInferior />
    </div>
  );
}

export default ExploreNationalities;
