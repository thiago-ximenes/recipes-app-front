import React from 'react';
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Header from '../components/Header/Header';
>>>>>>> 9a6a012c0616155fb7dd69349d9c6d5762e5fc9d

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/" component={ Header } />
    </Switch>
  );
}
