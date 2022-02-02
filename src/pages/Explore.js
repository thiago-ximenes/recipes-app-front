import React from 'react';
import ExploreButton from '../components/ExploreButtons/ExploreButton';

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
