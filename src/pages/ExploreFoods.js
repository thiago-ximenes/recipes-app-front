import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import SurpriseButtons from '../components/ExploreButtons/SurpriseButtons';

function ExploreFoods() {
  return (
    <div>
      <Header />
      <div className=" d-flex flex-row justify-content-center">
        <SurpriseButtons buttonName="Ingredient" typeRecipe="Foods" />
        <SurpriseButtons buttonName="Nationality" typeRecipe="Foods" />
        <SurpriseButtons buttonName="Surprise" typeRecipe="Foods" />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
