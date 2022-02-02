import React, { useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const history = useHistory();
  const { loading, data } = useContext(MyContext);

  useEffect(() => {
    if (data.meals) history.push('/foods');
    if (data.drinks) history.push('/drinks');
  }, [data]);

  return (
    !loading && (
      <div>
        <Header />
        { data.length > 0 && (
          <Card style={ { width: '18rem' } }>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button
                variant="primary"
              >
                Go somewhere

              </Button>
            </Card.Body>
          </Card>) }
        <MenuInferior />
      </div>
    )
  );
}

export default Recipes;
