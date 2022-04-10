import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NoMatch } from '../../pages/NoMatch/NoMatch';
import { APP_ROUTES } from '../../utils/constants';

export const PrivateRoute = ({
  isLoggedIn,
  path,
  exact = false,
  children: Component,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
        const isPathExists = APP_ROUTES.some(route => route === location.pathname);
        if (!isPathExists) return <NoMatch />

        if (isLoggedIn) return Component;
        return <Redirect to='/login' />;
      }}
    />
  );
};
