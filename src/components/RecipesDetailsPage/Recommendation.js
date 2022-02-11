import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

function Recommendation({ recommendations, type }) {
//   const [recommendation, setRecommendation] = useState([]);
//   const loadRecommendation = async () => {
// ----------- precisa do fetch inicial e ver o objeto -------
//     if (recommendation === '?') {
//       const reponse = await ;
//     }
//   }

  const FIVE = 5;
  const capitalizeType = type.charAt(0).toUpperCase() + type.slice(1, type.length - 1);

  return (
    <Container
      fluid="sm"
      className="overflow-auto"
    >
      <Row
        xs={ 2 }
        md={ 2 }
        lg={ 2 }
        className="flex-nowrap"
      >
        {recommendations && recommendations[type] && recommendations[type].length
        && recommendations[type].filter((
          recommendation, index,
        ) => index <= FIVE)
          .map((recommendation, index) => (
            <Col
              className="mx-5"
              sm={ 2 }
              md={ 2 }
              lg={ 2 }
              key={ recommendation[`id${capitalizeType}`] }
              data-testid={
                `${index}-recomendation-card`
              }
            >
              <Card>
                <img
                  style={ { width: '200px' } }
                  alt={ recommendation[`id${capitalizeType}`] }
                  src={ recommendation[`str${capitalizeType}Thumb`] }
                />
                <Card.Title
                  data-testid={ `${index}-recomendation-title` }
                >
                  { recommendation[`str${capitalizeType}`] }
                </Card.Title>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

Recommendation.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default Recommendation;
