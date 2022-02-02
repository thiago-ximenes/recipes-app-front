import React from 'react';
import CardRecipe from '../components/Card/CardRecipe';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';

function Recipes() {
  return (
    <div>
      <Header />
      <CardRecipe />
      <MenuInferior />
    </div>
  );
}

export default Recipes;
