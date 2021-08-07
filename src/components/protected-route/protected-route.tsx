import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from '../../services/hooks';
import PropTypes from 'prop-types';


interface IProtectedRoute {
  children: React.ReactNode;
  exact?: boolean;
  path: string;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children, ...rest }) => {
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

export default ProtectedRoute;
