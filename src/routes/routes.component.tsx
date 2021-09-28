import React from "react";
import { Switch, Route } from 'react-router-dom';

// pages
import Home from 'home/home.page';
import Products from "products/products.page"; 

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
  );
};

export default Routes;
