import PropTypes from 'prop-types';
import React from 'react';

function Recommendation({ recommendations }) {
//   const [recommendation, setRecommendation] = useState([]);
//   const loadRecommendation = async () => {
// ----------- precisa do fetch inicial e ver o objeto -------
//     if (recommendation === '?') {
//       const reponse = await ;
//     }
//   }

  const FIVE = 5;

  return (
    <div>
      {recommendations.length && recommendations.filter((
        recommendation, index,
      ) => index <= FIVE)
        .map((recommendation) => (
          <img
            data-testid={ `${recommendation.idDrink}-recommendation-card` }
            key={ recommendation.idDrink }
            alt={ recommendation.strDrink }
            src={ recommendation.strDrinkThumb }
          />
        ))}
    </div>
  );
}

Recommendation.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recommendation;
