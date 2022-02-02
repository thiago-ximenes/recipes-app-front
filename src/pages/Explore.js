import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import ExploreButton from '../components/ExploreButtons/ExploreButton';

function Explore() {
  return (
    <div>
      <Header />
      {/* // buttonName via props */}
      <ExploreButton buttonName="Foods" />
      <ExploreButton buttonName="Drinks" />
      <MenuInferior />
    </div>
  );
}

export default Explore;
