import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

// context
import { useGoogleAuth } from 'providers/authentication.provider';

// pages
import Home from 'home/home.page';
import Products from "products/products.page"; 
import Login from 'routes/login/login.page';
import NoAccess from "routes/no-acces/no-access.page";
import PrivateRoute from "routes/private-route/private-route";

const Routes = () => {
  const { isInitialized, isSignedIn } = useGoogleAuth();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute path="/products" component={Products} />
      <Route path="/login">
        {isInitialized && (isSignedIn ? <Redirect to="/" /> : <Login />)}
      </Route>
      <Route path="/no-access">
        <NoAccess />
      </Route>
    </Switch>
  );
};

export default Routes;
