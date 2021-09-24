import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function GuestRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state.account.user);
  const isAuthenticated = Boolean(user);
  console.log(isAuthenticated);
  if (isAuthenticated) return <Redirect to="/" />;
  return <Route {...rest} component={Component} />;
}

export default GuestRoute;
