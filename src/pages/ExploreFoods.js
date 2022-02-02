import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import SurpriseButtons from '../components/ExploreButtons/SurpriseButtons';

function ExploreFoods() {
  return (
    <div>
      <Header />
      <div className=" d-flex flex-row justify-content-center">
        <SurpriseButtons buttonName="Ingredient" />
        <SurpriseButtons buttonName="Nationality" />
        <SurpriseButtons buttonName="Surprise" />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
