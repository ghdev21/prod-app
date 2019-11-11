import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../auth';

export default (props) => {
  const isAuth = !auth.isAuthenticated()
    ? (
      <Link to="/login" style={{ color: 'white' }}>
        Login
      </Link>
    )
    : null;
  return (
    <div>
      <h1>Not Found</h1>
      {isAuth}
    </div>
  );
};
