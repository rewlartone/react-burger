import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function ProtectedRoute({ children, ...rest }) {
  const { user } = useSelector((store) => store.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.shape({
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
  }),
};

export default ProtectedRoute;
