import React from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import classes from './NavigationItem.module.scss';
import { SETTINGS, POMODOROS } from '../../../../constants/Routes';

export default withRouter(({ title, location }) => {
  const locationPath = location.pathname.split('/');
  let path = title === SETTINGS ? `${title}/${POMODOROS}` : title;
  if (title === SETTINGS && locationPath.length > 2) {
    path = `${title}/${locationPath[locationPath.length - 1]}`;
  }

  return (
    <li className={classes.NavigationItem}>
      <NavLink to={`/${path}`} className={`${classes.NavigationLink}`} activeClassName={classes.Active}>
        <span className={`icon-${title}`} />
      </NavLink>
    </li>
  );
});
