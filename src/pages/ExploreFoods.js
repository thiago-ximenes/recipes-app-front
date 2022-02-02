import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import ExploreFoodDrinkButtons from '../components/ExploreButtons/ExploreButton';

function ExploreFoods() {
  return (
    <div>
      <Header />
      <div className=" d-flex flex-row justify-content-center">
        <ExploreFoodDrinkButtons buttonName="Ingredient" />
        <ExploreFoodDrinkButtons buttonName="Nationality" />
        <ExploreFoodDrinkButtons buttonName="Surprise" />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
