import React from 'react';
import auth from '../../auth';

export default (props) => (
  <div>
    <h1>Login Page</h1>
    <button onClick={() => {
      auth.login();
      props.history.push('/task-list');
    }}
    >
      Login
    </button>
  </div>
);
