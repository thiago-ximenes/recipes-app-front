import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Header from '../components/Header/Header';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/" component={ Header } />
    </Switch>
  );
}
