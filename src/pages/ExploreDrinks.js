import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import SurpriseButtons from '../components/ExploreButtons/SurpriseButtons';

function ExploreDrinks() {
  return (
    <div>
      <Header />
      <div className=" d-flex flex-row justify-content-center">
        <SurpriseButtons buttonName="Ingredient" typeRecipe="Drinks" />
        <SurpriseButtons buttonName="Surprise" typeRecipe="Drinks" />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
