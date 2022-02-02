import React from 'react';
import Card from 'react-bootstrap/card';
// import { Link } from 'react-router-dom';
import strThumb from '../../images/mealIcon.svg';

function CardRecipe() {
  return (
    // <Link to={/*fazer o redirect para a página
    // da receita pelo id da receita e pela rota de foods ou drinks
    // dependendo de onde ela vem - (requisito 32)*/ }>
    <Card style={ { width: '18rem' } }>
      {/* trocar image pela strThumb vindo da API de food ou drinks - (requisito 26) */}
      <Card.Img variant="top" src={ strThumb } />
      <Card.Body>
        {/* trocar 'Title' pelo strTitle vindo da API de food ou drinks - (requisito 26) */}
        <Card.Title className="text-center">Title</Card.Title>
      </Card.Body>
    </Card>
    // </Link>
  );
}

export default CardRecipe;
