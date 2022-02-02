import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const { loading } = useContext(MyContext);
  return (
    !loading && (
      <div>
        <Header />
        <MenuInferior />
      </div>
    )
  );
}

export default Recipes;
