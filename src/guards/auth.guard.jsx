import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import React from 'react';

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ component }) => {
  const { loginSuccess, data } = useSelector(state => state?.auth?.auth);

  return loginSuccess && data ? (
    <React.Fragment>{component}</React.Fragment>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default AuthGuard;