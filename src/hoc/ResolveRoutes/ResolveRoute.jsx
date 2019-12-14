import React from 'react';
import { withRouter } from 'react-router-dom';
import { RESOLVED_ROUTES } from '../../constants/Routes';
import NotFound from '../../containers/NotFound/NotFound';

export default withRouter(({ location, children }) => {
  const isResolved = RESOLVED_ROUTES.find((item) => item === location.pathname);
  let Component = children;
  if (!isResolved) {
    Component = <NotFound />;
  }
  return Component;
});
