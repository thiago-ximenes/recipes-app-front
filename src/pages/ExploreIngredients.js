import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import Ingredients from '../components/Ingredients/Ingredients';

function ExploreIngredients() {
  return (
    <div>
      <Header />
      <Ingredients />
      <MenuInferior />
    </div>
  );
}

export default ExploreIngredients;
