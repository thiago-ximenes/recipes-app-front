import React, { useEffect, useState } from 'react';
import fetchApi from '../../services/fetchApi';

export default function Ingredients() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const [allIngredients, setAllIngredients] = useState();
  const treze = 13;
  const fetchIngredients = () => {
    fetchApi(url).then((result) => {
      setAllIngredients(result);
    });
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      {
        allIngredients !== undefined
        && console.log(
          allIngredients.meals.filter((item) => Number(item.idIngredient) < treze),
        )
      }

      {/* {
        allIngredients !== undefined
        && allIngredients
          .map((item) => console.log(item))
          .map((alimentos) => (
            <div
              key={ alimentos.idIngredient }
              data-testid={ `${alimentos.srtIngredient}-ingredient-card` }
            >
              <p>{alimentos.srtIngredient}</p>
            </div>
          ))
      } */}

      {/* { console.log(allIngredients) } */}

    </div>
  );
}
