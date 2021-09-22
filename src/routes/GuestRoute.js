import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import authService from "../services/authService";

function GuestRoute({ component: Component, ...rest }) {
  const isAuthenticated = authService.isAuthenticated();
  console.log(isAuthenticated);

  if (isAuthenticated) return <Redirect to="/" />;
  // return <Route {...rest} component={isAuthenticated ? Home : Component} />;
  return <Route {...rest} component={Component} />;
}

export default GuestRoute;
