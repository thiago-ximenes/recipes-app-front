import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyContext from '../../Context/MyHeaderSearchContext/MyContent';
import fetchApi from '../../services/fetchApi';

export default function Ingredients() {
  const { setData } = useContext(MyContext);

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

  const onClick = (name) => {
    const filtrarClick = `https://www.${routeName}.com/api/json/v1/1//filter.php?i=${name}`;

    fetchApi(filtrarClick).then((result) => {
      setData(result);
    });

    history.push('/foods');
  };

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
              <button
                type="button"
                key={ index }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => onClick(ingdt.strIngredient) }
              >
                <p data-testid={ `${index}-card-name` }>
                  { ingdt.strIngredient }
                </p>
                <img
                  data-testid={ `${index}-card-img` }
                  alt={ ingdt.strIngredient }
                  src={ img }
                />
              </button>
            );
          })
      }

    </div>
  );
}
