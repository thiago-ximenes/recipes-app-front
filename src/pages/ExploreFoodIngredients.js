import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import Ingredients from '../components/renderIngredients/Ingredients';

function ExploreFoodsIngredients() {
  return (
    <div>
      <Header />
      <Ingredients />
      <MenuInferior />
    </div>
  );
}

export default ExploreFoodsIngredients;
