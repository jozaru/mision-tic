import React from "react";
import { Route, Redirect } from "react-router-dom";

// context
import { useGoogleAuth } from 'providers/authentication.provider';

const PrivateRoute = ({component: Component, ...rest}) => {
  const { isInitialized, isSignedIn } = useGoogleAuth();

  return(
    <Route {...rest}>
      {isInitialized && (isSignedIn ? <Component /> : <Redirect to="/login" />)}
    </Route>
  );
};

export default PrivateRoute;
