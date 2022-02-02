import React from 'react';
import ExploreButton from '../components/ExploreButtons/ExploreButton';
import MenuInferior from '../components/MenuInferior/MenuInferior';

function Explore() {
  return (
    <div>
      {/* // buttonName via props */}
      <ExploreButton buttonName="Foods" />
      <ExploreButton buttonName="Drinks" />
    </div>
  );
}

export default Explore;
