import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import ExploreButton from '../components/ExploreButtons/ExploreButton';

function ExploreDrinks() {
  return (
    <div>
      <Header />
      <div className=" d-flex flex-row justify-content-center">
        <ExploreButton buttonName="Ingredient" />
        <ExploreButton buttonName="Surprise" />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
