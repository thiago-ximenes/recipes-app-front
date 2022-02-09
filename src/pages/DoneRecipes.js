import React from 'react';
import DoneRecipesMain from '../components/DoneRecipesMain/DoneRecipesMain';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';

function DoneRecipes() {
  return (
    <div>
      <Header />
      <DoneRecipesMain />
      <MenuInferior />
    </div>
  );
}

export default DoneRecipes;
