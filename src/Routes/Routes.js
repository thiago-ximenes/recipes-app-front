import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoneRecipes from '../pages/DoneRecipes';
import Explore from '../pages/Explore';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreIngredients from '../pages/ExploreIngredients';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreFoodsNationalities from '../pages/ExploreFoodsNationalities';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import RecipeFoodDetails from '../pages/RecipeFoodDetails';
import RecipeDrinksDetails from '../pages/RecipeDrinksDetails';
import FoodsInProgress from '../pages/FoodsInProgess';
import DrinksInProgress from '../pages/DrinksInProgress';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Recipes from '../pages/Recipes';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/foods/:id" component={ RecipeFoodDetails } />
      <Route exact path="/drinks/:id" component={ RecipeDrinksDetails } />
      <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />
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
        component={ ExploreFoodsNationalities }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default Routes;
