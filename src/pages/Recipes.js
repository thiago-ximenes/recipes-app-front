import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from '../components/Header/Header';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import MyContext from '../Context/MyHeaderSearchContext/MyContent';

function Recipes() {
  const { loading, data } = useContext(MyContext);

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
