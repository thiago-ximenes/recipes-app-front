import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" />
      <Route exact path="/drinks" />
      <Route exact path="//foods/{id-da-receita}" />
      <Route exact path="//drinks/{id-da-receita}" />
      <Route exact path="/foods/{id-da-receita}/in-progress" />
      <Route exact path="/drinks/{id-da-receita}/in-progress" />
      <Route exact path="/explore" />
      <Route exact path="/explore/foods" />
      <Route exact path="/explore/drinks" />
      <Route exact path="/explore/foods/ingredients" />
      <Route exact path="//explore/drinks/ingredients" />
      <Route exact path="/explore/foods/nationalities" />
      <Route exact path="/profile" />
      <Route exact path="/done-recipes" />
      <Route exact path="/favorite-recipes" />
    </Switch>
  );
}

export default Routes;
