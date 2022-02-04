import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoneRecipes from '../pages/DoneRecipes';
import Explore from '../pages/Explore';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreIngredients from '../pages/ExploreIngredients';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreNationalities from '../pages/ExploreNationalities';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Recipes from '../pages/Recipes';
import NotFound from '../components/NotFound/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/foods/:id" component={ Recipes } />
      <Route exact path="/drinks/:id" component={ Recipes } />
      <Route exact path="/foods/id:/in-progress" />
      <Route exact path="/drinks/id:/in-progress" />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreNationalities }
      />
      <Route
        component={ NotFound }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default Routes;
