import React from 'react';
import DoneRecipesMain from '../components/DoneRecipesMain/DoneRecipesMain';
import Header from '../components/Header/Header';

function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" />
      <DoneRecipesMain />
    </div>
  );
}

export default DoneRecipes;
