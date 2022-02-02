import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import ExploreButton from '../components/ExploreButtons/ExploreButton';

function ExploreFoods() {
  return (
    <div>
      <Header />
      <ExploreButton buttonName="Ingredient" />
      <ExploreButton buttonName="Nationality" />
      <ExploreButton buttonName="Surprise" />
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
