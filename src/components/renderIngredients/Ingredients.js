import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import fetchApi from '../../services/fetchApi';

export default function Ingredients() {
  const history = useHistory();
  const domainName = history.location.pathname;
  const routeName = domainName.includes('foods') ? 'themealdb' : 'thecocktaildb';
  const tipo = routeName === 'themealdb' ? 'meals' : 'drinks';

  const url = `https://www.${routeName}.com/api/json/v1/1/list.php?i=list`;
  const [allIngredients, setAllIngredients] = useState();
  const doze = 12;
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
        && allIngredients[tipo]
          .filter((item, index) => index < doze)
          .map((ingdt, index) => {
            if (tipo === 'drinks') {
              ingdt.strIngredient = ingdt.strIngredient1;
            }
            const img = `https://www.${routeName}.com/images/ingredients/${ingdt.strIngredient}-Small.png`;
            return (
              <div
                key={ index }
                data-testid={ `${index}-ingredient-card` }
              >
                <p data-testid={ `${index}-card-name` }>
                  { ingdt.strIngredient }
                </p>
                <img
                  data-testid={ `${index}-card-img` }
                  alt={ ingdt.strIngredient }
                  src={ img }
                />
              </div>
            );
          })
      }

    </div>
  );
}
