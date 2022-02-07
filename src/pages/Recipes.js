import React, { useContext } from 'react';
import ButtonCategory from '../components/ButtonCategory/ButtonCategory';
import Header from '../components/Header/Header';
import MainCard from '../components/MainCard/MainCard';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const {
    loading,
  } = useContext(MyContext);

  return (
    !loading ? (
      <div>
        <Header />
        <ButtonCategory />
        <MainCard />
        <MenuInferior />
      </div>
    ) : (
      <h2>Loading...</h2>
    )
  );
}

export default Recipes;
